import { createContext, useState } from "react";
import { Login, LogOut } from "../services/auth";
import { api } from "../services/axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const isAuthenticated = user;

  async function LoginRequest({ contact, password }) {
    setLoading(true);
    const response = await Login({ contact, password });

    if (!response) {
      setLoading(false);
      return;
    }

    const { token, user } = response;
  }

  async function LogOutRequest() {
    setLoading(false);
    const response = await LogOut();
    if (!response) {
      setLoading(false);
      return;
    }
    setUser(null);
    setLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{ user, LoginRequest, LogOutRequest, loading, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
