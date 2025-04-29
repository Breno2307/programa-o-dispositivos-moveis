import { View, Text, Button } from "react-native";

function Registrar(navigation) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Registrar</Text>
      <Button title="criar" onPress={() => {}} />
      <Button title="voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Registrar;
