import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { router } from "expo-router";

export default function Tasks() {
  const { user, tasks, deleteTask, updateTask } = useContext(AuthContext);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!user) router.replace("/login");
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mes tâches</Text>

      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style={styles.task}>
            {editingIndex === index ? (
              <>
                <TextInput
                  style={styles.input}
                  value={text}
                  onChangeText={setText}
                />
                <TouchableOpacity
                  style={styles.edit}
                  onPress={() => {
                    updateTask(index, text);
                    setEditingIndex(null);
                  }}
                >
                  <Text style={styles.buttonText}>Valider</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text>{item}</Text>

                <View style={styles.actions}>
                  <TouchableOpacity
                    style={styles.edit}
                    onPress={() => {
                      setEditingIndex(index);
                      setText(item);
                    }}
                  >
                    <Text style={styles.buttonText}>Modifier</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.delete}
                    onPress={() => deleteTask(index)}
                  >
                    <Text style={styles.buttonText}>Supprimer</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.push("/tasks/new")}>
        <Text style={styles.buttonText}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20
  },
  task: {
    borderWidth: 1,
    borderColor: "#cbd5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  actions: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10
  },
  edit: {
    backgroundColor: "#3b82f6",
    padding: 8,
    borderRadius: 8,
    marginTop: 10
  },
  delete: {
    backgroundColor: "#ef4444",
    padding: 8,
    borderRadius: 8,
    marginTop: 10
  },
  button: {
    backgroundColor: "#FF7900",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5f5",
    padding: 10,
    borderRadius: 8,
    marginTop: 10
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});