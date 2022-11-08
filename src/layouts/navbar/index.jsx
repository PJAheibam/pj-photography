import React, { useState } from "react";
import Logo from "../../components/logo";
import NavMenu from "./nav-menu";
import { AppBar, Buttons, ToggleButton, ToolBar } from "./styles";
import SecondaryBtn from "../../components/buttons/secondary-button";
import PrimaryBtn from "../../components/buttons/primary-button";
import { HiOutlineMenuAlt1 as MenuIcon } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import NavDrawer from "./nav-drawer";
import { useComponentSize } from "react-use-size";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { ref, width } = useComponentSize();
  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  return (
    <>
      <AppBar ref={ref}>
        <Logo style={{ marginRight: "auto" }} />
        <ToolBar>
          {width >= 780 && <NavMenu />}
          <Buttons>
            {width >= 500 && <SecondaryBtn>Login</SecondaryBtn>}
            {width >= 605 && <PrimaryBtn>Register</PrimaryBtn>}
          </Buttons>
          {width < 780 && (
            <ToggleButton onClick={toggleMenu}>
              {open ? <CgClose /> : <MenuIcon />}
            </ToggleButton>
          )}
        </ToolBar>
      </AppBar>
      {open && <NavDrawer />}
    </>
  );
}

export default Navbar;
