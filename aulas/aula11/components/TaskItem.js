import { List, IconButton, Icon } from "react-native-paper";

function TaskItem({ Item }) {
  return (
    <List.Item
      title={Item.descricao}
      description={Task.concluida ? "concluida" : "pendente"}
      left={() => (
        <IconButton
          icon={task.concluida ? "check-circle" : "circle"}
          onPress={() => {}}
        />
      )}
      right={() => <IconButton icon="delete" onPress={() => {}} />}
    />
  );
}

export default TaskItem;
