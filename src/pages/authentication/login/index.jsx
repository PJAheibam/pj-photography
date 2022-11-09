import React from "react";
import {
  Container,
  Heading,
  Block,
  Label,
  TextField,
  ErrorText,
  AnimationContainer,
} from "../styles";
import PrimaryBtn from "../../../components/buttons/primary-button";

function LoginPage({ style }) {
  return (
    <AnimationContainer style={style}>
      <Heading>Login</Heading>
      <Block>
        <Label>Email</Label>
        <TextField type="email" name="email" placeholder="Your Email" />
      </Block>
      <Block>
        <Label>Password</Label>
        <TextField type="password" name="email" placeholder="Your Email" />
      </Block>
      <PrimaryBtn style={{ width: "fit-content", marginInline: "auto" }}>
        Login
      </PrimaryBtn>
    </AnimationContainer>
  );
}

export default LoginPage;
