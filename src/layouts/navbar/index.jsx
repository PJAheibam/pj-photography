import React, { useState } from "react";
import Logo from "../../components/logo";
import NavMenu from "./nav-menu";
import { AppBar, Buttons, ToggleButton } from "./styles";
import SecondaryBtn from "../../components/buttons/secondery-button";
import PrimaryBtn from "../../components/buttons/primary-button";
import { HiOutlineMenuAlt1 as MenuIcon } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import NavDrawer from "./nav-drawer";

function Navbar() {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen((prev) => !prev);
  }
  return (
    <>
      <AppBar>
        <Logo />
        <NavMenu />
        <Buttons>
          <SecondaryBtn>Login</SecondaryBtn>
          <PrimaryBtn>Register</PrimaryBtn>
        </Buttons>
        <ToggleButton onClick={toggleMenu}>
          {open ? <CgClose /> : <MenuIcon />}
        </ToggleButton>
      </AppBar>
      {open && <NavDrawer />}
    </>
  );
}

export default Navbar;
