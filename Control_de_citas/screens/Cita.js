import React,{useState} from 'react';
import { View,StyleSheet,SafeAreaView,Text,FlatList,TouchableOpacity, Image, Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import colores from '../utils/colores';

const DATA = [
  {
      id: "1",
      name: "Fernando Gomez",
      img: require("../assets/user2.png"),
      specialty: "Cardiología",
      business_hours: "9:00–18:00"
  },
  {
      id: "2",
      name: "Wilson Aparicio",
      img: require("../assets/user2.png"),
      specialty: "Medicina general",
      business_hours: "9:00–18:00"
  },
  {
      id: "3",
      name: "Oscar Chavez",
      img: require("../assets/user2.png"),
      specialty: "Cardiología",
      business_hours: "9:00–18:00"
  },
  {
      id: "4",
      name: "Mauricio Contreras",
      img: require("../assets/user2.png"),
      specialty: "Pediatría",
      business_hours: "9:00–18:00"
  },
];

//  function Cita({ navigation }) {
     
//     return (
//       <View style={styles.contenedor}>
//         <Button onPress={() => navigation.goBack()} title="Regresar a inicio" />
//       </View>
//     );
//   }

//   const styles = StyleSheet.create({
//     contenedor:
//     {
//       flex: 1, alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: colores.BG_COLOR
//     }

//   });

//   export default Cita;

const Item = ({ item, onPress, backgroundColor, textColor }) => (


  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>

      <View style={{ flexDirection: 'row', justifyContent: "space-between", padding: 10 }}>
          <Image source={item.img} style={{ width: '30%', height: 80, justifyContent: 'center' }} />
          
          <View>
              <Text style={[styles.name, textColor]}>{item.name}</Text>
              <Text style={[styles.info, textColor]}>{item.specialty}</Text>
              <Text style={[styles.info, textColor]}>Horario de atencion: {item.business_hours}</Text>
          </View>
      </View>

  </TouchableOpacity>

);



const Cita = () => {
  const [selectedId, setSelectedId] = useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
      setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
      setDatePickerVisibility(false);
  };
  
  const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#92C7DD" : "#ABC8E2";
      const color = item.id === selectedId ? 'white' : 'black';

      return (
          <Item
              item={item}
              onPress={() => setSelectedId(item.id)}
              backgroundColor={{ backgroundColor }}
              textColor={{ color }}
          />

      );
  };
 
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.searchBar}>
            <Text style={styles.label}>Fecha:</Text>
              <Button title="Seleccionar Fecha" onPress={showDatePicker} color='#92C7EE'/>
              <DateTimePickerModal isVisible={isDatePickerVisible}
              mode = "date"
              locale = 'es_ES'
              headerTextIOS="Elige la fecha"
              cancelTextIOS="Cancelar"
              confirmTextIOS="Confirmar"
              />
          </View>
          <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
          />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: 0,
      backgroundColor: '#97B0C3'
  },
  item: {
      padding: 5,
      marginVertical: 8,
      marginHorizontal: 16,
  },
  name: {
      fontSize: 20,
  },
  info: {
      fontSize: 13,
  },
  searchBar:{
    backgroundColor:'#252C30',
    height: 90,
    justifyContent:'flex-start',
    alignItems:"center"
  },
  label:{
    fontWeight:'bold',
    fontSize:18,
    marginTop: 20,
    color: '#92C7EE'
  }

});
export default Cita;