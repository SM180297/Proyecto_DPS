import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import        Home            from './../screens/Home';
import        Cita           from './../screens/Cita';
import    RegistroCita       from './../screens/RegistroCita';
import        Medico          from './../screens/Medico';
import CustomNavigatorContent from './CustomNavigatorContent';



const Drawer = createDrawerNavigator();

function NavigationComponent()
{
    return(
      <Drawer.Navigator initialRouteName="Inicio" drawerContent={props =><CustomNavigatorContent {...props} />}>
            <Drawer.Screen  name="Home"
                            component={Home}
            />
            
            <Drawer.Screen name="RegistroCita" component={RegistroCita} options={{ title: "Nueva Cita" }}/>
            <Drawer.Screen name="Citas" component={Cita} />
            <Drawer.Screen name="Medico" component={Medico} options={{title: 'Médicos'}} />
      </Drawer.Navigator>    
    );
  
}

export default NavigationComponent;
