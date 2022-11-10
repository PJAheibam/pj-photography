import * as yup from "yup";

const URL_REGEX = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

export const serviceSchema = yup.object().shape({
  name: yup.string().min(5).required("Required!"),
  sub_heading: yup.string().min(5).required("Required!"),
  image_url: yup
    .string()
    .min(5)
    .matches(URL_REGEX, "Link is not valid")
    .required("Required!"),
  desc: yup.string().min(5).required("Required!"),
});
