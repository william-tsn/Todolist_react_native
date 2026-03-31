import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { router } from "expo-router";

export default function NewTask() {
  const { addTask, user } = useContext(AuthContext);
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) router.replace("/login");
  }, [user]);

  const handleAdd = () => {
    if (!task.trim()) {
      setError("La tâche ne peut pas être vide");
      return;
    }

    addTask(task);
    setTask("");
    setError("");
    router.replace("/tasks");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nouvelle tâche</Text>

      <TextInput
        style={styles.input}
        placeholder="tâche....."
        value={task}
        onChangeText={setTask}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white"
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#FF7900",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center"
  }
});