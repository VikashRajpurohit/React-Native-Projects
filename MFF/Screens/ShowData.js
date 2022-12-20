import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {db} from '../config';
import {doc, getDoc} from 'firebase/firestore/lite';

export default function ShowData({route}) {
  const [data, setData] = useState();
  const [loading, setIsLoading] = useState(true);
  
  fetchFirestoreData = async () => {
    const docRef = doc(
      db,
      'ProductMaster',
      route.params.id,
    );
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
      setIsLoading(false)
    } else {
      console.warn('No such document!');
    }
  };

  useEffect(() => {
    fetchFirestoreData();
    
  }, [getDoc]);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text>{data.name}</Text>
      <Text>{data.tags}</Text>
      <Text>
        {+data.price +
          (data.price * data.rate) / 100 +
          (data.price * data.gst) / 100}
      </Text>

      <Text>{data.timeStamp}</Text>
    </View>
  );
}
