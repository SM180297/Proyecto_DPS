import React, { useState } from 'react';
import { View,StyleSheet,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Calendario from './../componentes/Calendario';
import colores from '../utils/colores';
import Selector from './../componentes/Picker';
import Reloj from '../componentes/Reloj';

function RegistroCitas({ navigation }) {

  const[texto,onChangeText] = useState('');
 
  return (
      <View style={styles.contenedor}>
            <Text style={styles.texto}>Especialidad</Text>
            <Selector etiqueta='Seleccina una especialidad'/>
            
            <Text style={styles.texto}>Medico</Text>
            <Selector etiqueta='Seleecciona un médico'/>
            
            <Text style={styles.texto}>Seleccione la fecha</Text>
            <Calendario style={styles.elementos} />
            
            <Text style={styles.texto}>Seleccione la hora</Text>
            <Reloj style={styles.elementos} />
          
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
    },
    texto:
    {
      fontSize:24,
      color:colores.AUX_COLOR
    },
    elementos:
    {
        marginVertical:30
    }
  });

  export default RegistroCitas;