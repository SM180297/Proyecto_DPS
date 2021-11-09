import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import CreacionCitasClientes from './registro_cliente';
import HistorialCliente from './historial_cliente';
import InfoMedicos from './info_medicos';

const Stack=createStackNavigator();
export default function Navigation_Cliente(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Creación de Citas" component={CreacionCitasClientes} options={{title:'Creación de Citas'}}/>
            <Stack.Screen name="Historial" component={HistorialCliente} options={{title:'Historial'}}/>
            <Stack.Screen name="Información de Medicos" component={InfoMedicos} options={{title:'Información de Medicos'}}/>
        </Stack.Navigator>

    );
}