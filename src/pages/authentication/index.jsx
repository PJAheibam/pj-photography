import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../page-not-found";
import LoginPage from "./login";
import { Main, Container } from "./styles";

function AuthPage() {
  const { type } = useParams();

  if (type !== "login" && type !== "register") return <PageNotFound />;

  return <Main>{type === "login" && <LoginPage />}</Main>;
}

export default AuthPage;
