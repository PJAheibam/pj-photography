import * as yup from "yup";

const REQUIRED = "Required!";

const URL_REGEX =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

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
