import React from "react";
import { Item, Items } from "./styles";
import { navLinks } from "../data";

function NavMenu({ direction = "horizontal" }) {
  return (
    <Items direction={direction}>
      {navLinks.map((link, i) => (
        <Item key={i} to={link.to}>
          {" "}
          {link.name}{" "}
        </Item>
      ))}
    </Items>
  );
}

export default NavMenu;
