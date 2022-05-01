import { createContext, useState } from "react";
import { Login, LogOut } from "../services/auth";
import { api } from "../services/axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;

  const navigate = null;
  // useEffect(() => {

  //   if(token){
  //     recoverUserInformation().then(response =>setUser(response));
  //   }
  // })

  async function LoginRequest({ contact, password }) {
    setLoading(true);
    const response = await Login({ contact, password });

    if (!response) {
      setLoading(false);
      return;
    }

    const { token, user } = response;
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setUser(user);
    const { role } = user.roleId;

    switch (role) {
      case "Aluno":
        return navigate("/");
      case "Gestor":
        return navigate("/school/admin/");
      case "SuperAdmin":
        return navigate("/dashboard/");
      default:
        return null;
    }
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
    // navigate("/");
  }

  return (
    <AuthContext.Provider
      value={{ user, LoginRequest, LogOutRequest, loading, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
