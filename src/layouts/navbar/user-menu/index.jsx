import React from "react";
import { Container, Icon, Item, Label } from "./styles";
import {
  MdOutlineDashboardCustomize as DashIcon,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { useAuthContext } from "../../../context/auth-contex";

function UserMenu() {
  const { logout } = useAuthContext();

  return (
    <Container>
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
