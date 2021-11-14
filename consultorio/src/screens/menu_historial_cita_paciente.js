import React from "react";
import {FlatList,View, Text} from 'react-native';
import Historial_cliente from '../screens/historial_cliente';

const menu_historial_pacientes=[
    {
        idcita:1,
        iduser:1,
        idpaciente:1,
        iddoctor:2,
        consultorio:'Colonia Medica',
        fecha_cita:'2021-11-15 10:30:00'
    },
    {
        idcita:2,
        iduser:2,
        idpaciente:2,
        iddoctor:1,
        consultorio:'Colonia Escalon',
        fecha_cita:'2021-11-15 09:30:00'
    },
];


export default function menu_historial_paciente({navigation}){

    return(
        <View>
            <FlatList data={menu_historial_pacientes}
                      renderItem={({item})=><Historial_cliente cita={item}/>}
                      keyExtractor={item=>item.idcita}
                      ListHeaderComponent={
                          <View>
                              <Text></Text>
                          </View>
                      }
                      />
        </View>
    );
}