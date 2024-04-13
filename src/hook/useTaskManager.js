import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useTaskManager = () => {
  const { tasks, setTasks } = useContext(AuthContext);
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task, i) => i !== id));
  };

  return { tasks, addTask, removeTask };
};

export default useTaskManager;
