import React from 'react';
import { View,Button} from 'react-native';

function RegistroCitas({ navigation }) {

    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Regresar a home"
        />
      </View>
    );
  }

  export default RegistroCitas;