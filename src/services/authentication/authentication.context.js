import React, { useState, createContext, useEffect } from "react";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import { loginRequest, createRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [isInitializing, setIsInitializing] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
    }
    setIsInitializing(false);
    // setIsLoading(false);
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    console.log("isLoading", isLoading);
    loginRequest(email, password)
      .then((user) => {
        console.log("isLoading", isLoading);
        setUser(user);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Login Error", err);
        console.log("isLoading", isLoading);
        setLoginError(err);
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password === repeatedPassword) {
      createRequest(email, password)
        .then((user) => {
          setUser(user);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("Login Error", err);
          setLoginError(err);
          setIsLoading(false);
        });
    } else {
      setLoginError({
        code: "auth/password-repeat-mismatch",
      });
      setIsLoading(false);
    }
  };

  const onLogout = () => {
    setUser(null);
    signOut(auth);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoginError(null);
    }, 2000);
  }, [loginError]);

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        loginError,
        isInitializing,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
