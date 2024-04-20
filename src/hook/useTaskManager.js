import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useTaskManager = () => {
  const { tasks, setTasks, setOpenShowModal } = useContext(AuthContext);

  const addTask = (task) => {
    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  const removeTask = (id) => {
    const newArr = tasks.filter((task, i) => i !== id);
    localStorage.setItem("tasks", JSON.stringify(newArr));
    setTasks(newArr);
    setOpenShowModal(-1);
  };

  const editTask = (id, data) => {
    tasks.splice(id - 1, 1, data);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setTasks(tasks);
  };

  return { tasks, addTask, removeTask, editTask };
};

export default useTaskManager;
