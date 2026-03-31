import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { router } from "expo-router";

export default function Signup() {
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSignup = () => {
    if (!email.trim() || !password.trim()) {
      setError("Champs obligatoires");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Email invalide");
      return;
    }

    signup(email.trim(), password.trim());
    setError("");
    router.replace("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>S'inscrire</Text>
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