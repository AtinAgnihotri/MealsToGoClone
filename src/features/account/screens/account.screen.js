import React, { useContext } from "react";
import { ImageBackground, Text } from "react-native";
import { Button } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";

import { DummyScreen } from "../../../infrastructure/navigation/navutils.devhelper";
import {
  AccountBackground,
  AccountContainer,
  AccountButton,
  AccountLoader,
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
