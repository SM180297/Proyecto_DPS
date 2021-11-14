import React, { Component } from 'react';
import {View,TextView,Input} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import menu_historial_paciente from './src/screens/menu_historial_cita_paciente';
import login from './src/screens/login'

const Stack=createStackNavigator();

const App=()=>(
     /* <NavigationContainer>
        <Stack.Navigator>
              <Stack.Screen name="login" component={login}/>
        </Stack.Navigator>
      </NavigationContainer>*/
      <Text>Bienvenido</Text>
);
export default App;
/*const styles = StyleSheet.create({
  cita: {
  backgroundColor: '#FFF',
  borderBottomColor: '#e1e1e1',
  borderStyle: 'solid',
  borderBottomWidth: 1,
  paddingVertical: 20,
  paddingHorizontal: 10
  },
  label: {
  fontWeight: 'bold',
  fontSize: 18,
  marginTop: 20
  },
  texto: {
  fontSize: 18,
  },
  btnEliminar: {
  padding: 10,
  backgroundColor: 'red',
  marginVertical: 10
  },
  textoEliminar: {
  color: '#FFF',
  fontWeight: 'bold',
  textAlign: 'center'
  }
  });*/