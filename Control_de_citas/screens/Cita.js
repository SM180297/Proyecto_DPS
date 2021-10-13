import React from 'react';
import { Button,View,StyleSheet } from 'react-native';
import colores from '../utils/colores';

 function Citas({ navigation }) {
     
    return (
      <View style={styles.contenedor}>
        <Button onPress={() => navigation.goBack()} title="Regresar a inicio" />
      </View>
    );
  }

  const styles = StyleSheet.create({
    contenedor:
    {
      flex: 1, alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colores.BG_COLOR
    }

  });

  export default Citas;
  