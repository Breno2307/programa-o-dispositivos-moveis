import { View, Text, StyleSheet } from "react-native";

function Galeria() {
  return (
    <View style={styles.grid}>
      <View style={styles.photo}>
        <Text>Foto 1</Text>
      </View>
      <View style={styles.photo}>
        <Text>Foto 2</Text>
      </View>
      <View style={styles.photo}>
        <Text>Foto 3</Text>
      </View>
      <View style={styles.photo}>
        <Text>Foto 4</Text>
      </View>
      <View style={styles.photo}>
        <Text>Foto 5</Text>
      </View>
      <View style={styles.photo}>
        <Text>Foto 6</Text>
      </View>
      <View style={styles.photo}>
        <Text>Foto 7</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingLeft: 5,
  },
  photo: {
    height: "20%",
    width: "31%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Galeria;
