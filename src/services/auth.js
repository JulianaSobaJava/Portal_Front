import { toast } from "react-toastify";
import { api } from "./axios";
import jwtDecode from "jwt-decode";

const delay = (amoutn = 750) =>
  new Promise((resolve) => setTimeout(resolve, amoutn));

let token = null;

export async function Login(data) {
  const response = await api
    .post("session", data)
    .then((response) => {
      console.log(response.data);
      toast.success("Login efectuado com sucesso 🔥");
      localStorage.setItem("Token", response.data.token);
      token = response.data.token;
      return response.data;
    })
    .catch(({ response }) => {
      toast.error(response?.data?.error);
    });

  if (response) return response;
  else return;
}

export function getToken() {
  localStorage.getItem("Token");
}

export function ExpiredToken() {
  if (!token) return localStorage.removeItem("Token");
}

export async function LogOut() {
  await delay();
  try {
    localStorage.removeItem("Token");
    toast.success("Sessão terminada 🔥");
  } catch (error) {
    toast.error("Erro ao terminar sessão!");
  }

  return {
    success: true,
  };
}

export async function recoverUserInformation() {
  await delay();
  const data = localStorage.getItem("Token");
  const USER_ID = jwtDecode(data).session.userId;

  return await api
    .get(`user/${USER_ID}`)
    .then((response) => {
      console.log("res+", response);
      return response.data;
    })
    .catch(({ response }) => {
      toast.error(response?.data?.error);
    });
}
