import { toast } from "react-toastify";
import { api } from "./axios";
import jwtDecode from "jwt-decode";

const delay = (amoutn = 750) =>
  new Promise((resolve) => setTimeout(resolve, amoutn));

let token = null;

//Verificando se o Token existe no navegador
export const isAuthenticated = () => localStorage.getItem("Token") !== null;

export const isAdmin = () => {
  const User = JSON.parse(localStorage.getItem("userLogado")) || {
    email: "superadmin@gmail.com",
  };

  if (
    (User && User.email === "superadmin@gmail.com") ||
    User.roleId.description === "superAdmin"
  )
    return true;

  return false;
};

//Logando o user
export const UserLogado = (user) =>
  localStorage.setItem("userLogado", JSON.stringify(user));

// Pegando os Dados do UserLogado
export const GetUser = () =>
  JSON.parse(localStorage.getItem("userLogado")) || {};

// Eliminando dados do UserLogado
export const RemoveUser = () => localStorage.removeItem("userLogado");

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
