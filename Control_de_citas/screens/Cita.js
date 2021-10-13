import React from 'react';
import { Button,View } from 'react-native';


 function Citas({ navigation }) {
     
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="volver a inicio" />
      </View>
    );
  }

  export default Citas;
  