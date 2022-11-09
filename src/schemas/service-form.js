import * as yup from "yup";

const URL_REGEX =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

export const serviceSchema = yup.object().shape({
  name: yup.string().min(5).required("Required!"),
  sub_heading: yup.string().min(5).required("Required!"),
  photo_url: yup
    .string()
    .min(5)
    .matches(URL_REGEX, "Link is not valid")
    .required("Required!"),
  desc: yup.string().min(5).required("Required!"),
});
