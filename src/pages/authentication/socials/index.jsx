import React from "react";
import { Container, Icons, Icon, Image } from "./styles";
import facebook from "../../../assets/icons/facebook.png";
import google from "../../../assets/icons/google.png";
import github from "../../../assets/icons/github.png";
import { Text } from "../styles";

function Socials({ parent }) {
  return (
    <Container>
      <Text>
        {parent === "register" ? "Create an account with" : "Or, login with-"}
      </Text>
      <Icons>
        <Icon title="Facebook">
          <Image src={facebook} alt="facebook icon" />
        </Icon>
        <Icon>
          <Image title="Google" src={google} alt="google icon" />
        </Icon>
        <Icon>
          <Image title="Github" src={github} alt="github icon" />
        </Icon>
      </Icons>
    </Container>
  );
}

export default Socials;
