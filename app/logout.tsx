import { useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { router } from "expo-router";

export default function Logout() {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
    router.replace("/");
  }, []);

  return null;
}