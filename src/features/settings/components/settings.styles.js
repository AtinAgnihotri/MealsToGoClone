import React from "react";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

const UserIconContainer = styled.View`
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

const UserIcon = styled(Avatar.Icon).attrs({
  icon: "human",
  size: 180,
})`
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

const UserImage = styled(Avatar.Image).attrs({
  size: 180,
})`
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

const UserEmail = styled(Text).attrs({ variant: "body" })`
  font-size: ${(props) => props.theme.fontSizes.h5};
`;

export const UserAvatar = ({ user, onIconPress, source }) => (
  <UserIconContainer>
    <TouchableOpacity onPress={onIconPress}>
      {source ? <UserImage source={source} /> : <UserIcon />}
    </TouchableOpacity>
    <Spacer position="top" size="large">
      <UserEmail>{user.email}</UserEmail>
    </Spacer>
  </UserIconContainer>
);

export const SettingsListSection = styled(List.Section)`
  padding: ${(props) => props.theme.space[3]};
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const LogoutItem = (props) => (
  <SettingsItem
    {...props}
    title="Logout"
    left={(props) => <List.Icon {...props} color="black" icon="logout" />}
  />
);

export const FavouritesItem = (props) => (
  <SettingsItem
    {...props}
    title="Favourites"
    description="View your favourites"
    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
  />
);
