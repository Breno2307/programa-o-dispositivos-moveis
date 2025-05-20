import { View, FlatList } from "react-native";
import { List } from "react-native-paper";

function ListaVertical() {
  const lojas = [
    "Restaurante Asa Sul",
    "Restaurante Asa Norte",
    "Restaurante Tagua",
    "Restaurante Ceilandia",
    "Bar Sudoeste",
    "Lanchonete Game",
    "Pizzaria Nucleo",
  ];
  return (
    <View>
      <Text variant="titleMedium">Lojas</Text>
      <FlatList
        data={lojas}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        renderItem={([item]) => <List.Item title={item} description={"#4,8"} />}
      />
    </View>
  );
}

export default ListaVertical;
