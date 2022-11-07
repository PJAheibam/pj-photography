import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const value = { user, loading, setLoading };

  //side effects
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;
