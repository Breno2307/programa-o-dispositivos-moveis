import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import NavegacaoPilha from "./routes/NavegacaoPilha";
import NavegacaoAbainferior from "./routes/NavegacaoAbainferior";
import NavegacaoAbasuperior from "./routes/NavegacaoAbasuperior";
import Navegacaogaveta from "./routes/Navegacaogaveta";
import NavegacaoAbaInferior from "./routes/NavegacaoAbainferior";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import NavegacaoPrincipal from "./routes/NavegacaoPrincipal";

function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavegacaoPrincipal />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

export default App;
