import * as yup from "yup";
const REQUIRED = "Required!";

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter an valid email address.")
    .required(REQUIRED),
  password: yup.string().min(6).required(REQUIRED),
});
