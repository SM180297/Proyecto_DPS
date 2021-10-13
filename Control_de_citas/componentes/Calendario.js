import React,{useState} from 'react';
import {View,Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };
  
    return (
      <View>
        <Button title="Seleccione Fecha..." onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    );
  };

