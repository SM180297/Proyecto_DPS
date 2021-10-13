import React from 'react';
import { Button,View,StyleSheet,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colores from '../utils/colores';


function Home({ navigation }) {

    
    return (
      <View style={styles.contenedor}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Citas')}>
          <View><Text style={styles.etiquetaBtn}>Crear citas</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Citas')}>
          <View><Text style={styles.etiquetaBtn}>Ver citas</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Citas')}>
          <View><Text style={styles.etiquetaBtn}>Información de especialistas</Text></View>
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

  export default Home;