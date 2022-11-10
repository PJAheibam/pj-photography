import React, { useState } from "react";
import Logo from "../../components/logo";
import NavMenu from "./nav-menu";
import {
  AppBar,
  Buttons,
  ToggleButton,
  ToolBar,
  IconButton,
  UserImg,
} from "./styles";
import SecondaryBtn from "../../components/buttons/secondary-button";
import PrimaryBtn from "../../components/buttons/primary-button";
import { HiOutlineMenuAlt1 as MenuIcon } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import NavDrawer from "./nav-drawer";
import { useComponentSize } from "react-use-size";
import { Link } from "react-router-dom";
import { UserIcon } from "../../components/user-icon";
import { useAuthContext } from "../../context/auth-contex";
import UserMenu from "./user-menu";

function Navbar() {
  const { user, loading } = useAuthContext();
  console.info(user);
  const [open, setOpen] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
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
          {!user && (
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
          {user && user?.uid && (
            <IconButton
              role="button"
              onClick={() => setOpenUserMenu((prev) => !prev)}
            >
              {user?.photoURL ? (
                <UserImg src={user?.photoURL} alt="User Icon" />
              ) : (
                <UserIcon />
              )}
              {openUserMenu && <UserMenu setOpenUserMenu={setOpenUserMenu} />}
            </IconButton>
          )}
          {width < 780 && (
            <ToggleButton onClick={toggleMenu}>
              {open ? <CgClose /> : <MenuIcon />}
            </ToggleButton>
          )}
        </ToolBar>
      </AppBar>
      {open && <NavDrawer setOpen={setOpen} />}
    </>
  );
}

export default Navbar;
