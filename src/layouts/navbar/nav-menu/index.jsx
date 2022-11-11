import React from "react";
import { Item, Items } from "./styles";
import { navLinks } from "../data";
import { useAuthContext } from "../../../context/auth-contex";
import { useWindowSize } from "react-use-size";

function NavMenu({ direction = "horizontal", setOpen = () => {} }) {
  const { width } = useWindowSize();
  const { user, loading } = useAuthContext();
  function handleClick() {
    setOpen((prev) => !prev);
  }

  if (loading) return null;

  return (
    <Items direction={direction}>
      {navLinks.map((link, i) => {
        if (user && user?.uid) {
          return (
            <Item key={i} to={link.to} onClick={handleClick}>
              {" "}
              {link.name}{" "}
            </Item>
          );
        }
        if (link.to !== "/add-service" && link.to !== "/my-reviews") {
          return (
            <Item key={i} to={link.to} onClick={handleClick}>
              {" "}
              {link.name}{" "}
            </Item>
          );
        }
      })}
      {width < 500 && !user && !user?.uid && (
        <Item to="/login" onClick={handleClick}>
          Login
        </Item>
      )}
    </Items>
  );
}

export default NavMenu;
