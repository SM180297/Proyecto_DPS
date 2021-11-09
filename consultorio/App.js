import React from 'react';
import {View,TextView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationCliente from './src/screens/navigation_cliente';

export default function App(){
  return(
    <NavigationContainer>
      <NavigationCliente></NavigationCliente>
    </NavigationContainer>
  );
}