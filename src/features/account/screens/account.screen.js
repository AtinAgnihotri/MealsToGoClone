import React, { useContext } from "react";

import {
  AccountBackground,
  AccountContainer,
  AccountLoader,
  AccountLabel,
  WatermelonAnimation,
} from "../components/account.styles";
import { AccountDialog } from "../components/account-dialog.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const AccountScreen = ({ navigation }) => {
  const { isInitializing } = useContext(AuthenticationContext);

  const proceedToLogin = () => {
    navigation.navigate("Login");
  };
  const proceedToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <AccountBackground>
      <WatermelonAnimation />
      <AccountLabel>Meals To Go</AccountLabel>
      <AccountContainer>
        {isInitializing && <AccountLoader />}
        {!isInitializing && (
          <AccountDialog
            proceedToLogin={proceedToLogin}
            proceedToRegister={proceedToRegister}
          />
        )}
      </AccountContainer>
    </AccountBackground>
  );
};
