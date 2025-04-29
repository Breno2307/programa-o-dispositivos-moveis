import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import Login from "../screens/Login";
import Registrar from "../screens/Registrar";

const Stack = createNativeStackNavigator();

function NavegacaoPilha() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registra" component={Registra} />
    </Stack.Navigator>
  );
}

export default NavegacaoPilha;
