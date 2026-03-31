import { createContext, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [registeredUser, setRegisteredUser] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const [tasks, setTasks] = useState<string[]>([]);

  const login = (email: string, password: string) => {
    if (
      registeredUser &&
      email === registeredUser.email &&
      password === registeredUser.password
    ) {
      setUser({ email, password });
      setError("");
    } else {
      setError("Mauvais identifiants ");
    }
  };

  const signup = (email: string, password: string) => {
    setRegisteredUser({ email, password });
    setError("");
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
      value={{
        user,
        login,
        signup,
        logout,
        error, 
        tasks,
        addTask,
        deleteTask,
        updateTask
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};