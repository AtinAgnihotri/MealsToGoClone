import React, { useContext } from "react";
import { List } from "react-native-paper";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  LogoutItem,
  FavouritesItem,
  UserAvatar,
} from "../components/settings.styles";

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
