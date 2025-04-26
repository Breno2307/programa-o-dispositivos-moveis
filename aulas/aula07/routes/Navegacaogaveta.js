import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Perfil from "../screens/Perfil";

const Drawer = createBottomTabNavigator();

function Navegacaogaveta() {
    return (
        <Drawer.Navigator>
      <Drawer.screen name="Home" component={Home} />
      <Drawer.screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
}

export default Navegacaogaveta;