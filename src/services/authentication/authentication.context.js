import React, { useState, createContext, useEffect } from "react";

import { loginRequest, createRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Login Error", err);
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
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
