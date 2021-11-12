import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import colores from '../utils/colores';

export default function Calendario(props)
{
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const { seleccionada} = props;
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date); // handle method
      hideDatePicker();
    };
  
    return (
      <View style={styles.contenedor}>
        <TouchableOpacity style={styles.caja} onPress={showDatePicker} >
          <Text style={styles.BG_COLOR}>Seleccione la fecha</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    );
  };


  const styles = StyleSheet.create({
    contenedor:
    {
      marginVertical: 20,
       width:'70%',
      height:'5%',
    },
    caja:{
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
      height:'100%',
      borderRadius:5,
      backgroundColor: colores.ENPH_COLOR,
    },
    etiqueta:
    {
      fontSize: 16,
      color: colores.BG_COLOR,
    }
  });
