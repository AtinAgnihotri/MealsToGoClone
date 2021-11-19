import React, { useState } from "react";

import { AccountInput, AccountButton } from "./account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const RegisterDialog = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  return (
    <>
      <AccountInput
        label="E-mail"
        placeholder="E-mail"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Spacer size="large">
        <AccountInput
          label="Password"
          secureTextEntry
          textContentType="password"
          autoCapitalize="none"
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </Spacer>
      <Spacer size="large">
        <AccountInput
          label="Repeat Password"
          secureTextEntry
          textContentType="password"
          autoCapitalize="none"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChangeText={(text) => setRepeatPassword(text)}
        />
      </Spacer>
      <Spacer size="large">
        <AccountButton
          icon="account-edit"
          mode="contained"
          onPress={() => onRegister(email, password, repeatPassword)}
        >
          Register
        </AccountButton>
      </Spacer>
    </>
  );
};
