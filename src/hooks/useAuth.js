import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContext);
};
