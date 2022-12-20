import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Button,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import ViewShot from 'react-native-view-shot';
import QrCode from '../Components/Project/QrCode';
import {db} from '../config';
import {collection, getDocs} from 'firebase/firestore/lite';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

export default function QrGenerator() {
  const ref = useRef();
  const [loading, setIsLoading] = useState(true);
  const [itemIds, setItemIds] = useState([]);
  const [items, setItems] = useState([]);

  fetchFirestoreData = async () => {
    const querySnapshot = await getDocs(collection(db, 'ProductMaster'));
    querySnapshot.forEach(doc => {
      setItemIds(snap => [doc.id, ...snap]);
    });
    setIsLoading(false);
    
    
  };

  useEffect(() => {
    fetchFirestoreData();
    console.log(itemIds[1])
  }, []);

  const onCapture = useCallback(uri => {
    setTimeout(() => {
      setItems(currState => [
        `<img src=${uri} 
        style= "margin:20px" width="210" height="240">`,
        ...currState,
      ]);
    }, 2000);
  }, []);

  async function createPDF() {
    let options = {
      html: `
            <html>
            <body>
            <center>
              <h1>QR Codes</h1>
                ${items}
              </center>
              </body>
            </html>`,
      fileName: 'QrCodes',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options);
    alert(file.filePath);
  }

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <ScrollView style={styles.outerContainer}>
      {itemIds.map(element => (
        <ViewShot
          style={styles.container}
          onCapture={onCapture}
          captureMode="mount"
          ref={ref}
          options={{fileName: 'Qr_code', format: 'jpg', quality: 0.9}}>
          <View style={styles.container_row}>
            <QrCode value={element}></QrCode>
          </View>
        </ViewShot>
      ))}
      <Button title="Press Me" onPress={createPDF} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: "15%",
    padding:"5%",    
    backgroundColor: 'white',
  },
  container_row: {
    flexDirection: 'row',
  },
});
