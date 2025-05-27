import { useContext, useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { SearchBar } from "react-native-paper";
import { StoreContext } from "../context/StoreContext";
import StoreItem from "../components/StoreItem";

function StoreScreeen({ route }) {
  const { categoria } = route.params;
  const { loading, searchStore } = useContext(StoreContext);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    searchStore(categoria);
  }, []);
  return (
    <View style={{ flex: 1, marginTop: 16, padding: 16 }}>
      <Searchbar
        placeholder={`Buscar em ${categoria}`}
        onIconPress={() => searchStore(categoria, filter)}
        onClearIconPress={() => searchStore(categoria, "")}
        onChangeText={setFilter}
        value={filter}
        style={{ marginBottom: 16 }}
      />
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <StoreItem />
      )}
    </View>
  );
}

export default StoreScreeen;
