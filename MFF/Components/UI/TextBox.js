import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function TextBox({value,title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={e => {
          value(e)
        }}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    marginVertical:8
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: -20,
    marginLeft: 30,
    backgroundColor: 'white',
    zIndex: 1,
    alignSelf: 'flex-start',
    paddingHorizontal:10
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 8,
    padding:8,
  },
});
