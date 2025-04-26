import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Perfil from "../screens/Perfil";

const Stack = createNativeStackNavigator();

function NavegacaoPilha() {
  return (
    <Stack.Navigator initialRouteName="Perfil">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}

export default NavegacaoPilha;
