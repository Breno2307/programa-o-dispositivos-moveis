import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";

function ForgotPasswordScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        autoCapitalize="none"
        keyboardType="email-address"
        label="Email"
        mode="outlined"
        
      />
      <Button mode="contained" onPress={()=>{}}>Enviar</Button>
      <Button onPress={()=>{}}>Voltar para o Login</Button>
    </View>
  );
}

export default ForgotPasswordScreen;
