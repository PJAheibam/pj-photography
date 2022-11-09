import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-contex";
import PageNotFound from "../page-not-found";
import LoginPage from "./login";
import RegisterPage from "./register";
import { Main, Container } from "./styles";

function AuthPage() {
  const { type } = useParams();
  const { user, loading } = useAuthContext();

  if (type !== "login" && type !== "register") return <PageNotFound />;

  if (!loading && user && user?.uid) return <Navigate to="/" />;

  return (
    <Main>
      <Container>
        {type === "login" && <LoginPage />}
        {type === "register" && <RegisterPage />}
      </Container>
    </Main>
  );
}

export default AuthPage;
