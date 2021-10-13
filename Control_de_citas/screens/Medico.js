import React from 'react';
import { View,Button} from 'react-native';

function Medico({ navigation }) {

    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Regresar a home"
        />
      </View>
    );
  }

  export default Medico;