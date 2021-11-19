import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favourites/favourites.context";

/*
top: ${(props) => props.theme.sizes[0]};
  right: ${(props) => props.theme.sizes[0]};
  width:${(props) => props.theme.sizes[3]}
*/

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: ${(props) => props.theme.sizes[2]};
  right: ${(props) => props.theme.sizes[2]};
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourited = favourites.find((r) => restaurant.placeId === r.placeId);
  const icon = isFavourited ? "heart" : "hearto";
  const color = isFavourited ? "tomato" : "white";

  return (
    <FavouriteButton
      onPress={() =>
        !isFavourited
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign name={icon} size={24} color={color} />
    </FavouriteButton>
  );
};
