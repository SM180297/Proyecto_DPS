import React, { useState } from 'react'  
import {StyleSheet,View, Text} from 'react-native'  
import {Picker} from '@react-native-picker/picker';
import colores from '../utils/colores';

 function Selector(){  
    const [country, setCountry] = useState('Unknown');

  return (
    <View style={styles.screen}>
      <Picker
        selectedValue={country}
        onValueChange={(value, index) => setCountry(value)}
        mode="dialog" // Android only
        style={styles.picker}
      >
        <Picker.Item label="Please select your country" value="Unknown" />
        <Picker.Item label="Australia" value="Australia" />
        <Picker.Item label="Belgium" value="Belgium" />
        <Picker.Item label="Canada" value="Canada" />
        <Picker.Item label="India" value="India" />
        <Picker.Item label="Japan" value="Japan" />
        <Picker.Item label="Australia" value="Australia" />
        <Picker.Item label="Belgium" value="Belgium" />
        <Picker.Item label="Canada" value="Canada" />
  
        <Picker.Item label="Japan" value="Japan" />
      </Picker>
      {/* <Text style={styles.text}>Your conuntry: {country}</Text> */}
    </View>);
   
}  
const styles = StyleSheet.create ({  
    screen: {
        // flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: colores.ENPH_COLOR,
         borderRadius:5,
        marginVertical:10
      },
      picker: {
        marginVertical: 10,
        width: 300,
        padding: 5,
        borderWidth: 1,
        // borderColor: "#666",
        color: colores.BG_COLOR
      }, 
})  
export default Selector;