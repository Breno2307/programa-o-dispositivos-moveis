import { Children, createContext } from "react";

const TaskContext = createContext();

function TaskProvider({ children }) {
  return <TaskContext.Provider value="">{Children}</TaskContext.Provider>;
}

export { TaskContext, TaskProvider };
