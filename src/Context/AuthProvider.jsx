import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

// creating context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // to get functional work
  const allContext = useFirebase();

  return (
    <AuthContext.Provider value={allContext}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
