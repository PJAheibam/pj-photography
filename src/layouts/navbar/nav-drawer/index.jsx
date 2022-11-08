import React from "react";
import NavMenu from "../nav-menu";
import { Container, Heading } from "./styles";

function NavDrawer({ style }) {
  return (
    <Container style={style}>
      <Heading>Menu</Heading>
      <NavMenu direction="vertical" />
    </Container>
  );
}

export default NavDrawer;
