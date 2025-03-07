import { StyleSheet, Text, View } from "react-native";
function AppBar(props) {
  <View
    style={{
      height: 50,
      backgroundColor: "#333",
      justifyContent: "center",
      paddingLeft: 16,
    }}
  >
    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}></Text>
  </View>;
}
function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar titulo="Minha aplicação React Native" />
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>
    </View>
  );
}
const styles = StyleSheet.create({});
export default App;
