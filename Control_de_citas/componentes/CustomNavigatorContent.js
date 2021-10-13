import { 
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList } from '@react-navigation/drawer';

import React from 'react';
import { StyleSheet } from 'react-native';

import colores from '../utils/colores';

function CustomNavigatorContent(props)
{
    return(
        //  <SafeAreaView style={{flex:1,height:'100%'}} {...props}>
            <DrawerContentScrollView  {...props} contentContainerStyle={styles.contenedor}>
                 <DrawerItemList  {...props} /> 
                <DrawerItem 
                    label="Cerrar Sesion"
                    labelStyle={styles.logOutLabel}
                    style={styles.logOut}/>
            </DrawerContentScrollView> 
            //  </SafeAreaView>
    );
}

    const styles = StyleSheet.create({
     contenedor:{
        flex:1,
        position: 'relative',
        backgroundColor: colores.AUX_COLOR

     },
     logOut: // logout button style
     {
        flex:1,
        position:'absolute',
        width:'93%',
        bottom: 30,
        backgroundColor: colores.BG_COLOR ,
     },
     logOutLabel: //logout button label style
     {
        color: colores.AUX_COLOR
     }
    });

export default CustomNavigatorContent;