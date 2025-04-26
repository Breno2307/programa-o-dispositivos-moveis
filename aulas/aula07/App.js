import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import NavegacaoPilha from "./routes/NavegacaoPilha";
import NavegacaoAbainferior from "./routes/NavegacaoAbainferior";
import NavegacaoAbasuperior from "./routes/NavegacaoAbasuperior";
import Navegacaogaveta from "./routes/Navegacaogaveta";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navegacaogaveta />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
