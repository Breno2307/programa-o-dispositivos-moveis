import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ForgotPasswordScreen/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
