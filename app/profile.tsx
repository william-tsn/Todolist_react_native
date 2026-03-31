import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { router } from "expo-router";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!user) router.replace("/login");
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user?.email}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Mot de passe</Text>
        <Text style={styles.value}>
          {showPassword ? user?.password : "••••••••"}
        </Text>

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.eye}>
            {showPassword ? "Cacher" : "Voir"}
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/tasks")}>
        <Text style={styles.buttonText}>Retour</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20
  },
  card: {
    width: "100%",
    backgroundColor: "#f1f5f9",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center"
  },
  label: {
    color: "#64748b",
    marginBottom: 5
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  eye: {
    color: "#3b82f6"
  },
  button: {
    backgroundColor: "#FF7900",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});