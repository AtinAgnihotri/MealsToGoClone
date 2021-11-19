import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../../../components/restaurant/compact-restaurant-info.component";

import { Text } from "../../../components/typography/text.component";

const RestaurantCalloutContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const RestaurantImage = styled.Image`
  width: ${(props) => props.theme.sizes[3]};
  height: ${(props) => props.theme.sizes[3]};
`;

export const MapCallout = ({ restaurant }) => {
  const { name, photos } = restaurant;
  const imageSrc = {
    uri: photos[0],
  };

  return <CompactRestaurantInfo restaurant={restaurant} />;
};
