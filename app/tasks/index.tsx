import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { router } from "expo-router";

export default function Tasks() {
  const { user, tasks, deleteTask, updateTask } = useContext(AuthContext);

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
            <Text>{item}</Text>

            <View style={styles.actions}>
              <TouchableOpacity style={styles.edit} onPress={() => updateTask(index)}>
                <Text style={styles.buttonText}>Modifier</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.delete} onPress={() => deleteTask(index)}>
                <Text style={styles.buttonText}>Supprimer</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/tasks/new")}>
          <Text style={styles.buttonText}>Ajouter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/profile")}>
          <Text style={styles.buttonText}>Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logout} onPress={() => router.push("/logout")}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
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
    borderRadius: 8
  },
  delete: {
    backgroundColor: "#ef4444",
    padding: 8,
    borderRadius: 8,
  },
  buttons: {
    marginTop: 20,
    gap: 10
  },
  button: {
    backgroundColor: "#FF7900",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  logout: {
    backgroundColor: "#ef4444",
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});