import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import  NavigationComponent  from './componentes/Navigation';



export default function App() {
  return (
    <NavigationContainer>
        <NavigationComponent/>
    </NavigationContainer>
  );
}