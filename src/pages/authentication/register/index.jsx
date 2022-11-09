import React from "react";
import {
  AnimationContainer,
  Block,
  Heading,
  Label,
  LinkButton,
  Text,
  TextField,
} from "../styles";
import PrimaryBtn from "../../../components/buttons/primary-button";
import Socials from "../socials";

function RegisterPage() {
  const btnStyles = {
    marginInline: "auto",
  };

  return (
    <AnimationContainer>
      <Heading>Register</Heading>
      <Block>
        <Label>Full Name</Label>
        <TextField name="full_name" type="text" placeholder="Your Full Name" />
      </Block>
      <Block>
        <Label>Email</Label>
        <TextField name="email" type="email" placeholder="Your Email" />
      </Block>
      <Block>
        <Label>Password</Label>
        <TextField
          name="password"
          type="password"
          placeholder="Your Password"
        />
      </Block>
      <Block>
        <Label>Confirm Password</Label>
        <TextField
          name="confirm_password"
          type="password"
          placeholder="Retype Your Password"
        />
      </Block>
      <PrimaryBtn style={btnStyles}>Submit</PrimaryBtn>
      <Socials parent="register" />
      <Text>
        Have already an account? <LinkButton to="/login">Login here</LinkButton>
      </Text>
    </AnimationContainer>
  );
}

export default RegisterPage;
