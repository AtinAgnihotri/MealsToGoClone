import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { DummyScreen } from "../../../infrastructure/navigation/navutils.devhelper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurants-info-card.component";
import {
  FavouritesList,
  NoFavourites,
  FavouritesContainer,
} from "../components/favourites.styles";

import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <>
      {!favourites.length ? (
        <NoFavourites navigation={navigation} />
      ) : (
        <RestaurantList
          data={favourites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetails", { item })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </>
  );
};
