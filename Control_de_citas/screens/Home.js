import React from 'react';
import { Button,View } from 'react-native';


function Home({ navigation }) {

    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Citas')}
          title="Ir a citas"
        />
        <Button
          onPress={() => navigation.navigate('RegistroCita')}
          title="Ir a nueva cita"
        />
        <Button
          onPress={() => navigation.navigate('Medico')}
          title="Ir a medicos"
        />
      </View>
    );
  }

  export default Home;