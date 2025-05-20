import { View, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";

function ListaHorizontal() {
  const Categorias = [
    "Restauranate",
    "Bares",
    "Lanchonete",
    "Pizzarias",
    "Sorveterias",
  ];
  return (
    <View>
      <Text variant="titleMeedium">Categorias</Text>
      <FlatList
        data={Categorias}
        horizontal
        showsHorizontallScrollIndicator ={false}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Button style={{ marginRight: 8 }}>{item} </Button>
        )}
      />
    </View>
  );
}
export default ListaHorizontal;
