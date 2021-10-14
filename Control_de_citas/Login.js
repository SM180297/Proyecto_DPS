
import React from 'react';
import {Button,Icon,Input} from 'react-native-elements'
import { StyleSheet, Text, View } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
        <Input
        containerStyle={styles.input}
        placeholder="ingresa tu usuario.."
        onChange={(e) => onChange(e, "email")}
        keyboardType= "email-address"
        errorMessage={errorEmail}
        defaultValue={formData.email}
        
        />
          <Input
        containerStyle={styles.input}
        placeholder="ingresa contraseña.."
        password={true}
        secureTextEntry={!showPassword}
        onChange={(e) => onChange(e, "password")}
        errorMessage={errorPassword}
        defaultValue={formData.password}
        rightIcon={
            <Icon
            type ="material-community"
            name={ showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.icon}
            onPress={() => setShowPassword(!showPassword)}
            />
        }
        
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30,
  },
});