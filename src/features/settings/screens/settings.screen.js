import React, { useContext, useState } from "react";
import { List } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  LogoutItem,
  FavouritesItem,
  UserAvatar,
} from "../components/settings.styles";
import { useFocusEffect } from "@react-navigation/native";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const profilePicSource = {
    uri: photo,
  };

  const getProfilePicture = async (usr) => {
    const photoUri = await AsyncStorage.getItem(`${usr.uid}-profile-pic`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  });
  // }, [user]);

  return (
    <>
      <UserAvatar
        user={user}
        onIconPress={() => navigation.navigate("Camera")}
        source={profilePicSource}
      />
      <List.Section>
        <FavouritesItem onPress={() => navigation.navigate("Favourites")} />
        <LogoutItem onPress={onLogout} />
      </List.Section>
    </>
  );
};
