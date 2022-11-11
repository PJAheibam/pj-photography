import React, { useState } from "react";
import {
  Main,
  Container,
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
import { useNavigate, useLocation } from "react-router-dom";
import useTitleChanger from "../../../hooks/use-title";
import Loading from "../../loading";
import { setJwtToken } from "../../../utils/set-jwt-token";

function RegisterPage() {
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { loading, register, setLoading } = useAuthContext();
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
      setLoading(true);
      const res = await register(values.email, values.password);
      // useJwtToken()
      setJwtToken(res.user);
      await updateProfile(res.user, {
        photoURL: values.image_url,
        displayName: values.full_name,
      });
      if (res?.user && res?.user?.uid) navigate(from, { replace: true });
      setLoading(false);
      // actions.formReset();
    } catch (err) {
      if (err.code === "auth/email-already-in-use")
        setError("Email is already in use!");
      setLoading(false);
      console.log(err);
    }
  }
  useTitleChanger("Register");

  if (loading) return <Loading />;

  return (
    <Main>
      <Container>
        <AnimationContainer onSubmit={handleSubmit}>
          <Heading>Register</Heading>
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
            {errors.email && touched.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}
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
          <Socials location={location} parent="register" />
          <Text>
            Have already an account?{" "}
            <LinkButton to="/login">Login here</LinkButton>
          </Text>
        </AnimationContainer>
      </Container>
    </Main>
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
