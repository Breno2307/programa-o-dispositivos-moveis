import { createContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = (props) => {
  const [tarefas, setTarefas] = useState([]);
  const adicionarTarefa = (tarefa) => {
    if (tarefa) {
      const novaTarefa = {
        id: Math.random(),
        nome: tarefa,
        concluida: false,
      };
      setTarefas([...tarefas, tarefa]);
    }
  };
  const removerTarefa = (id) => {
    const tarefasAutualizadas = tarefas.filter((item) => item.id != id);
    setTarefas(tarefasAutualizadas);
  };

  return (
    <TaskContext.Provider
      value={{
        tarefas,
        adicionarTarefa,
        removerTarefa,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
