import React, { useState } from 'react';
import { View,StyleSheet,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Calendario from './../componentes/Calendario';
import colores from '../utils/colores';


function RegistroCitas({ navigation }) {

  const[texto,onChangeText] = useState('');
 
  return (
      <View style={styles.contenedor}>


            <Calendario />
          <TouchableOpacity style={styles.btn}>
              <View><Text style={styles.etiquetaBtn}>Agregar</Text></View>
          </TouchableOpacity>
      </View>
    );
  }
 
 

  const styles = StyleSheet.create({
    contenedor:
    {
      flex: 1, alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colores.BG_COLOR
    },
    btn:
    {
      //backgroundColor: colores.DETAILS_COLOR,
      // width:75,
      // height:75,
      padding:15    
    },
    etiquetaBtn:{
      color: colores.AUX_COLOR,
      fontSize:20
    }
  });

  export default RegistroCitas;