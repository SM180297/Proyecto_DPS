import React,{useState} from 'react';
import {View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import colores from '../utils/colores';

export default function Reloj(props)
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
      <View>
        <TouchableOpacity onPress={showDatePicker} >
          <Text style={{color:colores.AUX_COLOR}}>Seleccione la hora</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    );
  };



