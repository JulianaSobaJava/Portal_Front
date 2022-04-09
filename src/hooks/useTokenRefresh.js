import { api } from "../config/axios";
import useAuth from "./useAuth";

export function useTokenRefresh() {
  const { setAuth } = useAuth();

  const refresh = async () => {
    await api.get;
  };

  return <div>useTokenRefresh</div>;
}
