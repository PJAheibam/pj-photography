import React from "react";
import { Container, Icons, Icon, Image } from "./styles";
import facebook from "../../../assets/icons/facebook.png";
import google from "../../../assets/icons/google.png";
import github from "../../../assets/icons/github.png";
import { Text } from "../styles";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useAuthContext } from "../../../context/auth-contex";
import { useNavigate } from "react-router-dom";

function Socials({ parent, location }) {
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const { loginWithPopup, setLoading } = useAuthContext();

  function handleLogin(provider) {
    setLoading(true);
    loginWithPopup(provider)
      .then((res) => {
        console.info(res);
        navigate(from, { replace: true });
      })
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
        <Icon type="button" onClick={() => handleLogin(googleProvider)}>
          <Image title="Google" src={google} alt="google icon" />
        </Icon>

        <Icon type="button" onClick={() => handleLogin(githubProvider)}>
          <Image title="Github" src={github} alt="github icon" />
        </Icon>
      </Icons>
    </Container>
  );
}

export default Socials;
