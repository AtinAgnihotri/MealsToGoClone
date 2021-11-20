import React, { useState, useContext, useEffect } from "react";
import { Snackbar } from "react-native-paper";

import {
  AccountBackground,
  AccountButton,
  AccountContainer,
  AccountLoader,
  AccountLabel,
} from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import accountLoginErrors from "../components/account-login-errors.json";
import { LoginDialog } from "../components/login-dialog.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const getErrorText = (errorCode) => {
  try {
    const code = errorCode.replace("auth/", "");
    return accountLoginErrors[code];
  } catch {
    return "Unable to login. Please try again later.";
  }
};

export const LoginScreen = ({ navigation }) => {
  const [isShowingSnack, setIsShowingSnack] = useState(false);

  const { onLogin, isLoading, loginError } = useContext(AuthenticationContext);

  const navigateBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (loginError) {
      console.log("LOGIN ERROR", loginError.name);
    }
    setIsShowingSnack(true);
    setTimeout(() => {
      setIsShowingSnack(false);
    }, 1000);
  }, [loginError]);

  return (
    <>
      <AccountBackground>
        <AccountLabel>Login</AccountLabel>
        <AccountContainer>
          {isLoading && <AccountLoader />}
          {!isLoading && <LoginDialog onLogin={onLogin} />}
        </AccountContainer>
        {!isLoading && (
          <Spacer position="top" size="large">
            <AccountButton onPress={navigateBack} mode="contained">
              Back
            </AccountButton>
          </Spacer>
        )}
      </AccountBackground>

      {isShowingSnack && loginError && (
        <Snackbar visible={isShowingSnack}>
          <Text variant="error">{getErrorText(loginError.code)}</Text>
        </Snackbar>
      )}
    </>
  );
};
