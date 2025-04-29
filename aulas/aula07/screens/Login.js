import { View, Text, Button } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login(navigation) {
    const {login} = useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "cener" }}>
      <Text>Login</Text>
      <Button title="Entrar" onPress={() => login()} />
      <Button title="Criar" onPress={() => navigation.navigate("Registrar")} />
    </View>
  );
}

export default Login;
