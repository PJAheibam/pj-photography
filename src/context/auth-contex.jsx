import React, { createContext, useContext, useEffect, useState } from "react";
import {
  useAuthObserver,
  logout,
  login,
  loginWithPopup,
} from "../features/auth";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const value = { user, loading, setLoading, login, logout, loginWithPopup };

  //side effects
  useAuthObserver(setLoading, setUser);
  // console.log(loading);
  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
