import React, { useState } from "react";
import Logo from "../../components/logo";
import NavMenu from "./nav-menu";
import { AppBar, Buttons, ToggleButton, ToolBar, IconButton } from "./styles";
import SecondaryBtn from "../../components/buttons/secondary-button";
import PrimaryBtn from "../../components/buttons/primary-button";
import { HiOutlineMenuAlt1 as MenuIcon } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import NavDrawer from "./nav-drawer";
import { useComponentSize } from "react-use-size";
import { Link } from "react-router-dom";
import { UserIcon } from "../../components/user-icon";
import { useAuthContext } from "../../context/auth-contex";

function Navbar() {
  const { user, loading } = useAuthContext();
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
          {!loading && !user && (
            <Buttons>
              {width >= 500 && (
                <SecondaryBtn as={Link} to="/login">
                  Login
                </SecondaryBtn>
              )}
              {width >= 615 && (
                <PrimaryBtn as={Link} to="/register">
                  Register
                </PrimaryBtn>
              )}
            </Buttons>
          )}
          {!loading && user && user?.uid && (
            <IconButton>
              <UserIcon />
            </IconButton>
          )}
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
