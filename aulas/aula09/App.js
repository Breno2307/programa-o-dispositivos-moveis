import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./routes/MainNavigator";
import { LojaProvider } from "./Context/LojaContext";

function App() {
  return (
    <SafeAreaProvider>
      <LojaProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </LojaProvider>
    </SafeAreaProvider>
  );
}

export default App;
