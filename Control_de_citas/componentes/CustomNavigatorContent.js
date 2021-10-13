import { 
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList } from '@react-navigation/drawer';

import React from 'react';
import { StyleSheet} from 'react-native';

// import { SafeAreaView } from 'react-native-safe-area-context';
import  { Icon }  from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomNavigatorContent(props)
{
    return(
        //  <SafeAreaView style={{flex:1,height:'100%'}} {...props}>
            <DrawerContentScrollView  {...props} contentContainerStyle={styles.contenedor}>
                 <DrawerItemList {...props} /> 
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
        position: 'relative'
     },
     logOut: // logout button style
     {
        flex:1,
        position:'absolute',
        width:'93%',
        bottom: 30,
        // backgroundColor: '#8e8e8e' ,
     },
     logOutLabel: //logout button label style
     {
        // color: '#ffffff'
     }
    });

export default CustomNavigatorContent;