import React from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/auth-contex";
import PageNotFound from "../page-not-found";
import LoginPage from "./login";
import RegisterPage from "./register";
import { Main, Container } from "./styles";

function AuthPage() {
  const location = useLocation();
  const { pathname } = location;
  // const { type } = useParams();
  const { user, loading } = useAuthContext();

  if (pathname !== "/login" && pathname !== "/register")
    return <PageNotFound />;

  if (!loading && user && user?.uid) return <Navigate to="/" />;

  return (
    <Main>
      <Container>
        {pathname === "/login" && <LoginPage location={location} />}
        {pathname === "/register" && <RegisterPage location={location} />}
      </Container>
    </Main>
  );
}

export default AuthPage;
