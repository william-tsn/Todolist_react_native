import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [tasks, setTasks] = useState<string[]>([]);

  const login = (email: string, password: string) => {
    setUser({ email, password });
  };

  const signup = (email: string, password: string) => {
    setUser(null);
  };

  const logout = () => setUser(null);

  const addTask = (task: string) => setTasks([...tasks, task]);

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const updateTask = (index: number, newText: string) => {
    const updated = [...tasks];
    updated[index] = newText;
    setTasks(updated);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, logout, tasks, addTask, deleteTask, updateTask }}
    >
      {children}
    </AuthContext.Provider>
  );
};