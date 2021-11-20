import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native-paper";

import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";

export const FavouritesList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const NoFavouritesContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NoFavouritesHeading = styled(Text).attrs({
  variant: "label",
})`
  font-size: ${(props) => props.theme.fontSizes.h4};
  padding: ${(props) => props.theme.space[2]};
`;

export const NoFavouritesSubtext = styled(Text).attrs({
  variant: "body",
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const NoFavouritesCTA = styled(Button).attrs({
  color: colors.brand.primary,
  mode: "contained",
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const NoFavourites = ({ navigation }) => {
  const navigateToRestaurantScreen = () => {
    navigation.goBack();
    navigation.navigate("RestaurantScreen");
  };

  return (
    <NoFavouritesContainer>
      <NoFavouritesHeading>No favourites . . . yet!</NoFavouritesHeading>
      <Spacer position="top" size="large">
        <NoFavouritesSubtext>
          Search Restaurants in any city and add them to your favourites
        </NoFavouritesSubtext>
      </Spacer>
      <Spacer position="top" size="large">
        <NoFavouritesCTA icon="map-search" onPress={navigateToRestaurantScreen}>
          Search
        </NoFavouritesCTA>
      </Spacer>
    </NoFavouritesContainer>
  );
};

export const FavouritesContainer = styled.View``;
