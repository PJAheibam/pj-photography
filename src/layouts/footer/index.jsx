import React from "react";
import { Container, CopyRight } from "./styles";
import Logo from "../../components/logo";

function Footer() {
  return (
    <Container>
      <Logo />
      <CopyRight>Copyright &copy; 2022 PJ Photography, Picturesque</CopyRight>
    </Container>
  );
}

export default Footer;
