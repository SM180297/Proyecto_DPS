import React from 'react';
import { View,Button} from 'react-native';

function Login({ navigation }) {

    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Citas')}
          title="Ir a citas"
        />
      </View>
    );
  }

  export default Login;