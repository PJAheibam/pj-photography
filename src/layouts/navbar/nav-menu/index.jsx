import React from "react";
import { Item, Items } from "./styles";
import { navLinks } from "../data";
import { useAuthContext } from "../../../context/auth-contex";

function NavMenu({ direction = "horizontal" }) {
  const { user, loading } = useAuthContext();
  if (loading) return null;
  return (
    <Items direction={direction}>
      {navLinks.map((link, i) => {
        if (user && user?.uid) {
          return (
            <Item key={i} to={link.to}>
              {" "}
              {link.name}{" "}
            </Item>
          );
        }
        if (link.to !== "/add-service" && link.to !== "/my-reviews") {
          return (
            <Item key={i} to={link.to}>
              {" "}
              {link.name}{" "}
            </Item>
          );
        }
      })}
    </Items>
  );
}

export default NavMenu;
