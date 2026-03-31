import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { router } from "expo-router";

export default function Login() {
  const { login, user, error } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) router.replace("/tasks");
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={setPassword}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={() => login(email, password)}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text style={styles.link}>Créer un compte</Text>
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
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5f5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
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
  link: {
    marginTop: 15,
    textAlign: "center",
    color: "#3b82f6"
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center"
  }
});