import React,{useState} from 'react';
import { View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import colores from '../utils/colores';
import {Picker as PickerB} from '@react-native-picker/picker';
// function Medico({ navigation }) {

    
//     return (
//       <View style={styles.contenedor}>
//         <Button
//           onPress={() => navigation.navigate('Home')}
//           title="Regresar a inicio"
//         />
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


const Medico = () => {
    const [selectedId, setSelectedId] = useState(null);

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
              <Text style={styles.label}>Especialidad</Text>
              <PickerB style={{backgroundColor:'white',width:300}}>
                <PickerB.Item label="--seleccione una especialidad--" value=""/>
                    <PickerB.Item label="Medicina General" value="mg" />
                    <PickerB.Item label="Cardiología" value="cr" />
                    <PickerB.Item label="Pediatría" value="pd" />
            </PickerB>
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

export default Medico;