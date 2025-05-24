import { useNavigation } from "@react-navigation/native";
import { View, FlatList } from "react-native";
import { Button } from "react-native-paper";
import { useContext } from "react";
import { LojaContext } from "../Context/LojaContext";

function Grid() {
  const navigation = useNavigator();
  const {categorias} = useContext(LojaContext);

  return (
    <View>
      <FlatList
        data={categorias}
        numColumns={2}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <View style={{flex:1, width: "48%", marginBottom: 8, marginRight:8 }}>
            <Button
            icon={item.icone}
              mode="contained"
              onPress={() => navigation.navigate("Loja", { categoria, item })}
            >
              {item.nome}
            </Button>
          </View>
        )}
      />
    </View>
  );
}

export default Grid;
