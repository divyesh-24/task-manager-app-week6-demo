import { createContext, useEffect, useState } from "react";
import Modal from "../components/Modal";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("credential") ?? false;
    if (user) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("credential");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, tasks, setTasks, open, setOpen }}
    >
      {children}
    </AuthContext.Provider>
  );
};
