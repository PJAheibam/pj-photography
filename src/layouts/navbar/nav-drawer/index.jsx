import React from "react";
import NavMenu from "../nav-menu";
import { Container, Heading } from "./styles";

function NavDrawer({ style, setOpen }) {
  return (
    <Container style={style}>
      <Heading>Menu</Heading>
      <NavMenu setOpen={setOpen} direction="vertical" />
    </Container>
  );
}

export default NavDrawer;
