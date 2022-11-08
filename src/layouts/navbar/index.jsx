import React from "react";
import Logo from "../../components/logo";
import NavMenu from "./nav-menu";
import { AppBar } from "./styles";

function Navbar() {
  return (
    <AppBar>
      <Logo />
      <NavMenu />
    </AppBar>
  );
}

export default Navbar;
