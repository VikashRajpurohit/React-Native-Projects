import {View, RadioButton, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function Radiobox({value, title}) {
  const [checked, setChecked] = useState('Curton');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      
      <RadioButton
        value="Curton"
        status={checked === 'Curton' ? 'checked' : 'unchecked'}
        onPress={() => {
          value('Curton');
          setChecked('Curton');
        }}
      />

      <RadioButton
        value="Upholstery"
        status={checked === 'Upholstery' ? 'checked' : 'unchecked'}
        onPress={() => {
          value('Upholstery');
          setChecked('Upholstery');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    marginVertical: 8,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: -20,
    marginLeft: 30,
    backgroundColor: 'white',
    zIndex: 1,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  },
});
