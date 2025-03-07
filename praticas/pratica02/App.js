import { StyleSheet, Text, View } from "react-native";

function AppBar(props) {
  <View style={styles.appBar}>
    <Text style={styles.title}></Text>
  </View>;
}
function App() {
  return (
    <View style={styles.container}>
      <AppBar titulo="Minha aplicação React Native" />
      <View></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  appBar: {
    height: 50,
    backgroundColor: "#333",
    justifyContent: "center",
    paddingLeft: 16,
  },
  title: { fontSize: 20, fontWeight: "bold", color: "#fff" },
});

export default App;
