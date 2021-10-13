import React from 'react';
import { View,Button,StyleSheet} from 'react-native';
import colores from '../utils/colores';
function Medico({ navigation }) {

    
    return (
      <View style={styles.contenedor}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Regresar a inicio"
        />
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

  export default Medico;