import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AddProduct from './Screens/AddProduct';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShowData from './Screens/ShowData';
import ScanPage from './Screens/ScanPage';
import QrGenerator from './Screens/QrGenerator';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      <View>
        <AddProduct />
      </View>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={AddProduct}
            options={{title: 'Adding Data'}}
          />
          <Stack.Screen name='QRGen' component={QrGenerator}/>
          <Stack.Screen name='ViewData' component={ShowData}/>
          <Stack.Screen name='ScanPage' component={ScanPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
