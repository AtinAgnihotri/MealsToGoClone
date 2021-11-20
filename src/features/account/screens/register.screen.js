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
import { Spacer } from "../../../components/spacer/spacer.component";
import { RegisterDialog } from "../components/register-dialog.component";

const getErrorText = (errorCode) => {
  try {
    const code = errorCode.replace("auth/", "");
    return accountLoginErrors[code];
  } catch {
    return "Unable to login. Please try again later.";
  }
};

export const RegisterScreen = ({ navigation }) => {
  const [isShowingSnack, setIsShowingSnack] = useState(false);

  const { onRegister, isLoading, loginError } = useContext(
    AuthenticationContext
  );

  const navigateBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (loginError) {
      console.log("Hachacha", loginError.name);
    }
    setIsShowingSnack(true);
    setTimeout(() => {
      setIsShowingSnack(false);
    }, 1500);
  }, [loginError]);

  return (
    <>
      <AccountBackground>
        <AccountLabel>Register</AccountLabel>
        <AccountContainer>
          {isLoading && <AccountLoader />}

          {!isLoading && <RegisterDialog onRegister={onRegister} />}
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
