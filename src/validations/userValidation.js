import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .trim("Campo sem conteúdo")
    .matches(/^[aA-zZ-Zà-úÀ-Ú\s]+$/, "Apenas letras")
    .required("O nome completo é obrigatório")
    .min(3, "Insira o seu nome verdadeiro")
    .max(50, "Username must not exceed 20 characters"),
  password: Yup.string()
    .required("Obrigatório")
    .min(6, "A senha deve ter no mínimo 6 letras")
    .max(20, "Password must not exceed 40 characters"),
  confirmPassword: Yup.string()
    .required("Password is required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
  telefone: Yup.string()
    .matches(/^[9]{1}([1-4]|[9]){1}[0-9]{7}$/, "Número Inválido")
    .required("Obrigatório")
    .max(9, "Insira os números correctos")
    .min(9, "Insira os números correctos"),
  bi: Yup.string()
    .required("Obrigatório")
    .matches(
      /^[0-9]{9}([BA]?|[BE]|[BO]|[CA]|[CC]|[CN]|[CS]|[CE]|[HA]|[HO]|[LA]|[LN]|[LS]|[ME]|[MO]|[NE]|[UE]|[ZE]){2}[0-9]{3}$/,
      "BI inválido"
    )
    .max(14, "Dados inválidos")
    .min(14, "Dados inválidos"),
  dateBorn: Yup.string().required("Obrigatório").matches(),
  street: Yup.string()
    .required("Obrigatório")
    .matches(/^[aA-zZ-Zà-úÀ-Ú\s]+$/, "Dados inválidos"),
});

export const sessionValidator = Yup.object().shape({
  contact: Yup.string(),
  password: Yup.string().required("Obrigatório"),
});
