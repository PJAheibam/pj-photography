import * as yup from "yup";

const REQUIRED = "Required!";

const URL_REGEX = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg)/g;

export const regFormSchema = yup.object().shape({
  full_name: yup.string().min(3).required(REQUIRED),
  email: yup.string().email("Enter an valid email address.").required(REQUIRED),
  password: yup.string().min(6).required(REQUIRED),
  image_url: yup.string().matches(URL_REGEX, "Image link is not valid"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match!")
    .required(REQUIRED),
});
