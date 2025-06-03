import { useState } from "react";
import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";

function TaskModal({setshowModal}) {
    const [tarefa, setTarefa] = useState("");
  return (
    <View
      style={{
        margin: 16,
        padding: 16,
        backgroundColor: "white",
        borderRadius: 8,
      }}
    >
      <TextInput
        label="Nova Tarefa"
        mode="outlined"
        value={""}
        onChangeText={setTarefa}
      />
      <Button mode="contained" onPress={() => setshowModal()}>
        Adicionar
      </Button>
      <Button mode="outlined" onPress={() => setshowModal()}>
        Cancelar
      </Button>
    </View>
  );
}

export default TaskModal;
