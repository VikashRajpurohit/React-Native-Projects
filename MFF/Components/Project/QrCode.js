import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ViewShot from 'react-native-view-shot';
import QRCode from 'react-native-qrcode-svg';

export default function QrCode({value, onImageLoad}) {
  return (
    <View style={styles.underContainer}>
      <QRCode
        size={220}
        value={value}
      />
      <Text style={styles.text}> {value} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  underContainer: {
    flex: 1,
    alignItems:"center",
    margin: 'auto',
    

  },
  text: {
    alignSelf: 'center',
    marginTop:10,
    width:"80%",
    alignItems:"center",
    textAlign:"center"
  },
});
