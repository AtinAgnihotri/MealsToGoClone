import React, { useContext } from "react";
import { Button, List } from "react-native-paper";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { DummyScreen } from "../../../infrastructure/navigation/navutils.devhelper";
import {
  LogoutItem,
  FavouritesItem,
  UserAvatar,
  SettingsListSection,
} from "../components/settings.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <>
      <UserAvatar user={user} />
      <List.Section>
        <FavouritesItem onPress={() => navigation.navigate("Favourites")} />
        <LogoutItem onPress={onLogout} />
      </List.Section>
    </>
  );
};
