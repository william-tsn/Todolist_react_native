import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { router } from "expo-router";

export default function NewTask() {
  const { addTask, user } = useContext(AuthContext);
  const [task, setTask] = useState("");

  useEffect(() => {
    if (!user) router.replace("/login");
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nouvelle tâche</Text>

      <TextInput
        style={styles.input}
        placeholder="tâche....."
        onChangeText={setTask}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addTask(task);
          router.replace("/tasks");
        }}
      >
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
    marginBottom: 20
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
  }
});