import React from "react";
import { AccountButton } from "./account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountDialog = ({ proceedToLogin, proceedToRegister }) => {
  return (
    <>
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
    </>
  );
};
