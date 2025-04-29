import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";

const Tab = createBottomTabNavigator();

function NavegacaoAbasuperior() {
  return (
    <Tab.Navigator>
      <Tab.screen name="Home" component={Home} />
      <Tab.screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}

export default NavegacaoAbasuperior;
