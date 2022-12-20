import { View, Text, Pressable,StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

export default function ScanPage({navigation}) {
      const [link,setLink] = useState("")
      
      function onSuccess(e) {
        setLink(e.data);
        setTimeout(() => {
         navigation.navigate('ViewData', {id: e.data});
        }, 3000);
      }


   return (
    <SafeAreaView style={styles.container}>
      <Pressable>
        <Text style={styles.qrText}>My QR</Text>
      </Pressable>

      <View style={styles.qrContainer}>
        <QRCodeScanner
          width={'80%'}
          fadeIn={true}
          onRead={onSuccess}
         flashMode={RNCamera.Constants.FlashMode.off}
        />
      </View>

      <Text style={styles.qrMiniText}>{link}</Text>
     </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  qrText: {
    marginVertical: 50,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gold',
  },
  imageContainter: {
    width: 300,
    height: 300,
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  qrContainer: {
    alignItems: 'center',
    padding: 100,
    height: '80%',
    width: '80%',
    borderColor: 'gold',
    borderWidth: 3,
  },
  qrMiniText: {
    marginTop: -50,
    textAlign: 'center',
    fontSize: 12,
    color: 'gold',
    width: 250,
  },
});

