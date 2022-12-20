/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Button} from 'react-native';
import {db} from '../config.js';
import React, {useState} from 'react';
import TextBox from '../Components/UI/TextBox.js';
import Radiobox from '../Components/UI/Radiobox.js';
import {doc, setDoc} from 'firebase/firestore/lite';

export default function AddProduct({navigation}) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [tags, setTags] = useState('');
  const [price, setPrice] = useState('');
  const [gst, setGst] = useState('');
  const [rate, setRate] = useState('');

  const addField = async () => {
    const timeStamp = new Date().toISOString();
    try {
      await setDoc(doc(db, 'ProductMaster', name+timeStamp), {
        timeStamp,
        name,
        type,
        tags,
        price,
        gst,
        rate,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const viewAll = () => {
    navigation.navigate('ScanPage');
  };
  return (
    <View style={styles.mainView}>
      <Text style={styles.heading}>ADD PRODUCT</Text>
      <TextBox
        title={'Name'}
        value={e => {
          setName(e);
          console.log('res');
        }}
      />
      <TextBox
        title={'Tags'}
        value={e => {
          setTags(e);
        }}
      />
      <TextBox
        title={'Price'}
        value={e => {
          setPrice(e);
        }}
      />
      <TextBox
        title={'GST'}
        value={e => {
          setGst(e);
        }}
      />
      <TextBox
        title={'Profit Rate'}
        value={e => {
          setRate(e);
        }}
      />
      <TextBox
        title={'Type'}
        value={e => {
          setType(e);
        }}
      />

      <View style={styles.button}>
        <Button onPress={addField} title={'Register'} />
      </View>
      <View style={styles.button}>
        <Button onPress={viewAll} title={'Get Products'} />
      </View>
      <View style={styles.button}>
        <Button onPress={()=>{
          navigation.navigate('QRGen');
        }} title={'Get Qr\'s'} />
      </View>
      {/* <Radiobox
        title={'Type'}
        value={e => {
          setType(e);
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  heading: {
    fontSize: 25,
    marginVertical: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  button: {
    marginHorizontal: 50,
    marginVertical: 20,
    // borderTopColor: 'grey',
    // borderTopWidth:2,
    // paddingTop:20
    borderRadius: 8,
    overflow: 'hidden',
  },
});
