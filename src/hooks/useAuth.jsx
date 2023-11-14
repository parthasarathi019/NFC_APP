import { AuthContext } from "../context/Admin.auth";
import { useContext } from "react";

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === null)
    throw new Error("useAuth must be used within a AuthProvider");
  return context;
}
