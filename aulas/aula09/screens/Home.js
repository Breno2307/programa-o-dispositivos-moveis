import { View } from "react-native";
import ListaVertical from "../components/ListaVertical";
import ListaHorizontal from "../components/ListaHorizontal";
import { useEffect, useContext } from "react";
import { LojaContext } from "../Context/LojaContext";
import { ActivityIndicator } from "react-native-paper";

function Home() {
  const { carregando, carregarDados } = useContext(LojaContext);

  useEffect(() => {
    carregarDados();
  }, []);
  return (
    <View style={{ flex: 1, padding: 16 }}>
      {carregando ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size={"large"} />
        </View>
      ) : (
        <>
          <ListaHorizontal />
          <ListaVertical />
        </>
      )}
    </View>
  );
}

export default Home;
