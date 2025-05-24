import { useContext } from "react";
import { View, FlatList } from "react-native";
import { Button, Text } from "react-native-paper";
import { LojaContext } from "../Context/LojaContext";

function ListaHorizontal() {
  const {categorias} = useContext(LojaContext);

  return (
    <View style={{marginBottom:8}}>
      <Text variant="titleMedium">Categorias</Text>
      <FlatList
        data={categorias}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtactor={(item, index) => index}
        renderItem={({ item }) => (
          <View style={{flex:1, marginRight:8 }}>
          <Button mode="outlined" icon={item.icon}>{item.nome}</Button>
          </View>
        )}
      />
    </View>
  );
}

export default ListaHorizontal;
