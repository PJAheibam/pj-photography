import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/auth-contex";
import Loading from "../pages/loading";

function PrivateRoute({ children }) {
  const { user, loading } = useAuthContext();
  const location = useLocation();
  console.log(user);
  if (loading) return <Loading />;

  if (user && user?.uid) return children;

  return <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
