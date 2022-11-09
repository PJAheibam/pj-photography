import React from "react";
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

function LoginPage({ style }) {
  const theme = useTheme();
  const buttonStyles = {
    width: "fit-content",
    marginInline: "auto",
    color: theme.palette.primary.main.text,
  };
  return (
    <AnimationContainer style={style}>
      <Heading>Login</Heading>
      <Block>
        <Label>Email</Label>
        <TextField type="email" name="email" placeholder="Your Email" />
      </Block>
      <Block>
        <Label>Password</Label>
        <TextField type="password" name="password" placeholder="Your Email" />
      </Block>
      <PrimaryBtn style={buttonStyles}>Login</PrimaryBtn>
      <Socials />
      <Text>
        Don't have an account?{" "}
        <LinkButton to="/register">Register here</LinkButton>
      </Text>
    </AnimationContainer>
  );
}

export default LoginPage;
