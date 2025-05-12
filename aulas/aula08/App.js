import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainNAvigator from "./routes/MainNAvigator";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNAvigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
