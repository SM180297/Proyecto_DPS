import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import        Home            from './../screens/Home';
import        Cita           from './../screens/Cita';
import    RegistroCita       from './../screens/RegistroCita';
import        Medico          from './../screens/Medico';
import CustomNavigatorContent from './CustomNavigatorContent';
import colores from '../utils/colores';




const Drawer = createDrawerNavigator();

function NavigationComponent()
{
    return(
      <Drawer.Navigator initialRouteName="Inicio" drawerContent={props =><CustomNavigatorContent {...props}/>}
      screenOptions={{
        drawerActiveTintColor: colores.TEST_COLOR,
        headerStyle: 
        {
          backgroundColor: colores.AUX_COLOR,
          borderBottomColor: colores.ENPH_COLOR,
          borderBottomWidth: 7,
        },
        headerTitleStyle:{
          fontSize:30
        },
        headerTitleAlign:'center',
        drawerActiveBackgroundColor:      colores.BG_COLOR,
        drawerActiveTintColor:            colores.AUX_COLOR,
        drawerInactiveBackgroundColor:    colores.AUX_COLOR,
        drawerInactiveTintColor:          colores.BG_COLOR,
  }}>
            <Drawer.Screen  name="Home"
                            component={Home}
                            
            />
            <Drawer.Screen name="RegistroCita"
                           component={RegistroCita} 
                           options={{ title: "Nueva Cita"}}/>
            <Drawer.Screen name="Citas" component={Cita} />
            <Drawer.Screen name="Medico" component={Medico} 
                        options={{title: 'Médicos' }} />
      </Drawer.Navigator>    
    );
  
}

export default NavigationComponent;
