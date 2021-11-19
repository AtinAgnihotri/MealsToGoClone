import React from "react";
import { ImageBackground, Text } from "react-native";
import { Button } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";

import { DummyScreen } from "../../../infrastructure/navigation/navutils.devhelper";
import {
  AccountBackground,
  AccountContainer,
  AccountButton,
} from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {
  const proceedToLogin = () => {
    navigation.navigate("Login");
  };
  const proceedToRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <AccountBackground>
      <AccountContainer>
        <AccountButton
          icon="login"
          mode="contained"
          //   accessibilityLabel="Login with your meals to go account"
          onPress={proceedToLogin}
        >
          Login
        </AccountButton>
        <Spacer size="large">
          <AccountButton
            icon="account-edit"
            mode="contained"
            //   accessibilityLabel="Register for a meals to go account"
            onPress={proceedToRegister}
          >
            Register
          </AccountButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
