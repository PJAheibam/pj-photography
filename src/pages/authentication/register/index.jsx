import React from "react";
import {
  AnimationContainer,
  Block,
  ErrorText,
  Heading,
  Label,
  LinkButton,
  Text,
  TextField,
} from "../styles";
import PrimaryBtn from "../../../components/buttons/primary-button";
import Socials from "../socials";
import { useFormik } from "formik";
import { regFormSchema } from "../../../schemas/registration-form";
import { useAuthContext } from "../../../context/auth-contex";
import { updateProfile } from "firebase/auth";

function RegisterPage() {
  const { register, setLoading } = useAuthContext();
  const btnStyles = {
    marginInline: "auto",
  };

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema: regFormSchema,
    });

  async function onSubmit(values, actions) {
    try {
      const res = await register(values.email, values.password);

      await updateProfile(res.user, {
        photoURL: values.image_url,
        displayName: values.full_name,
      });

      // actions.formReset();
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  }

  return (
    <AnimationContainer onSubmit={handleSubmit}>
      <Heading>Register</Heading>
      <Block>
        <Label>Full Name</Label>
        <TextField
          name="full_name"
          type="text"
          placeholder="Your Full Name"
          value={values.full_name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.full_name && touched.full_name ? "true" : undefined}
        />
        {errors.full_name && touched.full_name && (
          <ErrorText>{errors.full_name}</ErrorText>
        )}
      </Block>
      <Block>
        <Label>Email</Label>
        <TextField
          name="email"
          type="email"
          placeholder="Your Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email && touched.email ? "true" : undefined}
        />
        {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
      </Block>
      <Block>
        <Label>Profile Pic URL</Label>
        <TextField
          name="image_url"
          type="text"
          placeholder="Your Profile Pic URL"
          value={values.image_url}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.image_url && touched.image_url ? "true" : undefined}
        />
        {errors.image_url && touched.image_url && (
          <ErrorText>{errors.image_url}</ErrorText>
        )}
      </Block>
      <Block>
        <Label>Password</Label>
        <TextField
          name="password"
          type="password"
          placeholder="Your Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password && touched.password ? "true" : undefined}
        />
        {errors.password && touched.password && (
          <ErrorText>{errors.password}</ErrorText>
        )}
      </Block>
      <Block>
        <Label>Confirm Password</Label>
        <TextField
          name="confirm_password"
          type="password"
          placeholder="Retype Your Password"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={
            errors.confirm_password && touched.confirm_password
              ? "true"
              : undefined
          }
        />
        {errors.confirm_password && touched.confirm_password && (
          <ErrorText>{errors.confirm_password}</ErrorText>
        )}
      </Block>
      <PrimaryBtn type="submit" style={btnStyles}>
        Submit
      </PrimaryBtn>
      <Socials parent="register" />
      <Text>
        Have already an account? <LinkButton to="/login">Login here</LinkButton>
      </Text>
    </AnimationContainer>
  );
}

const initialValues = {
  full_name: "",
  email: "",
  image_url: "",
  password: "",
  confirm_password: "",
};

export default RegisterPage;
