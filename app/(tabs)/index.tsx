import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task App</Text>
      <Text style={styles.subtitle}>Gère tes tâches facilement</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/login")}>
        <Text style={styles.buttonText}>me connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/signup")}>
        <Text style={styles.buttonText}>m'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10
  },
  subtitle: {
    color: "#64748b",
    marginBottom: 30
  },
  button: {
    backgroundColor: "#FF7900",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});