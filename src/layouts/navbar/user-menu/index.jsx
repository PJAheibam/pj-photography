import React, { useEffect, useRef } from "react";
import { Container, Icon, Item, Label } from "./styles";
import {
  MdOutlineDashboardCustomize as DashIcon,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { useAuthContext } from "../../../context/auth-contex";

function UserMenu({ setOpenUserMenu }) {
  const { logout } = useAuthContext();
  const { user } = useAuthContext();
  const containerRef = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (!containerRef.current.contains(e.target)) {
        // setOpenUserMenu((prev) => !prev);
      }
    }
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      {user && user?.uid && <Item>{user?.displayName.split(" ")[0]}</Item>}
      <Item>
        <Icon>
          <DashIcon />
        </Icon>
        <Label>Dashboard</Label>
      </Item>
      <Item>
        <Icon>
          <MdSettings />
        </Icon>
        <Label>Setting</Label>
      </Item>
      <Item>
        <Icon>
          <MdLogout />
        </Icon>
        <Label onClick={logout}>Logout</Label>
      </Item>
    </Container>
  );
}

export default UserMenu;
