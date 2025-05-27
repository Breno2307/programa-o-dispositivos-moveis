import { SafeAreaProvider } from "react-native-safe-area-context";
import { StoreProvider } from "./context/StoreContext";

function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider></StoreProvider>
    </SafeAreaProvider>
  );
}

export default App;
