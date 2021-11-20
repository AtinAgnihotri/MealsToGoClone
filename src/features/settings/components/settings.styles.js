import React from "react";
import { Button, List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

// size: (props) => props.theme.sizes[5],
export const UserIconContainer = styled.View`
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const UserIcon = styled(Avatar.Icon).attrs({
  icon: "human",
  size: 180,
})`
  background-color: ${(props) => props.theme.colors.brand.primary};
`;

export const UserEmail = styled(Text).attrs({ variant: "body" })`
  font-size: ${(props) => props.theme.fontSizes.h5};
`;

export const SettingsListSection = styled(List.Section)`
  padding: ${(props) => props.theme.space[3]};
`;

export const UserAvatar = ({ user }) => (
  <UserIconContainer>
    <UserIcon />
    <Spacer position="top" size="large">
      <UserEmail>{user.email}</UserEmail>
    </Spacer>
  </UserIconContainer>
);

export const SettingsItem = styled(List.Item)`
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