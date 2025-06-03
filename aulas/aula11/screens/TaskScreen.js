import { useState } from "react";
import { View, FlatList } from "react-native";
import { Modal, FAB, Appbar } from "react-native-paper";
import TaskItem from "../components/Taskitem";
import TaskModal from "../components/TaskModal";

function TaskScreen() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content title="Minhas Tarefas" />
      </Appbar.Header>
      <View style={{ flex: 1, paddingBottom: 24 }}>
        <FlatList
          data={[]}
          keyExtractor={(item) => item.id}
          renderItem={TaskItem}
        />
      </View>
      <FAB
        style={{ position: "absolute", right: 16, bottom: 16 }}
        icon="plus"
        onPress={() => setShowModal(true)}
      />
      <Modal visible={showModal} transparent />
      <TaskModal setShowModal={setShowModal} />
    </View>
  );
}

export default TaskScreen;
