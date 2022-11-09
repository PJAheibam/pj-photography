import React, { useState } from "react";
import {
  Container,
  Heading,
  Block,
  Label,
  TextField,
  ErrorText,
  AnimationContainer,
  Text,
  LinkButton,
} from "../styles";
import PrimaryBtn from "../../../components/buttons/primary-button";
import { useTheme } from "styled-components";
import Socials from "../socials";
import { useFormik } from "formik";
import { loginFormSchema } from "../../../schemas/login-form";
import { useAuthContext } from "../../../context/auth-contex";

function LoginPage({ style }) {
  const theme = useTheme();
  const [error, setError] = useState(null);
  const { login, setLoading } = useAuthContext();
  const buttonStyles = {
    width: "fit-content",
    marginInline: "auto",
    color: theme.palette.primary.main.text,
  };

  const { values, errors, handleSubmit, handleChange, handleBlur, touched } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit,
      validationSchema: loginFormSchema,
    });

  async function onSubmit(values, actions) {
    // console.log("Submitted");
    try {
      setLoading(true);
      const res = await login(values.email, values.password);
      actions.resetForm();
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          setError("User not found!");
          break;
        default:
          setError(err.code);
      }
      setLoading(false);
      console.error(err.code);
    }
  }

  return (
    <AnimationContainer onSubmit={handleSubmit} style={style}>
      <Heading>Login</Heading>
      {error && (
        <ErrorText
          style={{
            textAlign: "center",
            padding: "1em 1em",
            fonSize: "1rem",
            border: "2px solid rgba(255,255,255,0.05)",
            borderRadius: "0.35rem",
          }}
        >
          {error}
        </ErrorText>
      )}
      <Block>
        <Label>Email</Label>
        <TextField
          type="email"
          name="email"
          placeholder="Your Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email && touched.email ? "true" : undefined}
        />
        {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
      </Block>
      <Block>
        <Label>Password</Label>
        <TextField
          type="password"
          name="password"
          placeholder="Your Email"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.password && touched.password ? "true" : undefined}
        />
        {errors.password && touched.password && (
          <ErrorText>{errors.password}</ErrorText>
        )}
      </Block>
      <PrimaryBtn type="submit" style={buttonStyles}>
        Login
      </PrimaryBtn>
      <Socials />
      <Text>
        Don't have an account?{" "}
        <LinkButton to="/register">Register here</LinkButton>
      </Text>
    </AnimationContainer>
  );
}

export default LoginPage;
