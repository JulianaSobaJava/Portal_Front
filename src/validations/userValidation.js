import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[aA-zZ-Z\s]+$/, "Apenas letras")
    .required("O nome completo é obrigatório")
    .min(3, "Insira o seu nome verdadeiro")
    .max(20, "Username must not exceed 20 characters"),
  password: Yup.string()
    .required("Obrigatório")
    .min(6, "A senha deve ter no mínimo 6 letras")
    .max(20, "Password must not exceed 40 characters"),
  confirmPassword: Yup.string()
    .required("Password is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  telefone: Yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Número Inválido"
    )
    .required("Obrigatório")
    .max(9, "Insira os números correctos")
    .min(9, "Insira os números correctos"),
  // bi: Yup.string,
  // dateBorn: Yup.string(),
  // province: Yup.string(),
  // municipe: Yup.string(),
  // streetAddress: Yup.string(),
});

export const sessionValidator = Yup.object().shape({
  username: Yup.string()
    .matches(/^[aA-zZ-Z\s]+$/, "Apenas letras")
    .required("O nome completo é obrigatório"),
  password: Yup.string().required("Obrigatório"),
});
