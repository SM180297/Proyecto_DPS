import React from "react";
import {View, Text} from 'react-native';



export default function historial_cliente({cita}){

    return(
        <View>
            <Text>{cita.title}</Text>
        </View>
    );
}