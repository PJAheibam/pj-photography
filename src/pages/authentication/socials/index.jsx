import React from "react";
import { Container, Icons, Icon, Image } from "./styles";
import facebook from "../../../assets/icons/facebook.png";
import google from "../../../assets/icons/google.png";
import github from "../../../assets/icons/github.png";
import { Text } from "../styles";
import { GoogleAuthProvider } from "firebase/auth";
import { useAuthContext } from "../../../context/auth-contex";

function Socials({ parent }) {
  const googleProvider = new GoogleAuthProvider();
  const { loginWithPopup, setLoading } = useAuthContext();

  function handleLogin(provider) {
    setLoading(true);
    loginWithPopup(provider)
      .then((res) => console.info(res))
      .catch((err) => {
        setLoading(false);
        if (err.code.includes("popup-closed-by-user"))
          console.warn("Login popup is closed by the user.");
        else console.warn(err);
      });
  }
  return (
    <Container>
      <Text>
        {parent === "register" ? "Create an account with" : "Or, login with-"}
      </Text>
      <Icons>
        <Icon title="Facebook">
          <Image src={facebook} alt="facebook icon" />
        </Icon>
        <Icon onClick={() => handleLogin(googleProvider)}>
          <Image title="Google" src={google} alt="google icon" />
        </Icon>
        <Icon>
          <Image title="Github" src={github} alt="github icon" />
        </Icon>
      </Icons>
    </Container>
  );
}

export default Socials;
