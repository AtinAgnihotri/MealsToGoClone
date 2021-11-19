import React, { useState } from "react";

import { AccountInput, AccountButton } from "./account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";

export const LoginDialog = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <AccountButton
          icon="login"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AccountButton>
      </Spacer>
    </>
  );
};
