import React from "react";
import { Navigate, useParams } from "react-router-dom";
import PageNotFound from "../page-not-found";

function AuthPage() {
  const { type } = useParams();

  if (type !== "login" && type !== "register") return <PageNotFound />;

  return <div>AuthPage</div>;
}

export default AuthPage;
