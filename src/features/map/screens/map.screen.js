import React from "react";
import MapView from "react-native-maps";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const Map = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  flex: 1;
`;

export const MapScreen = () => {
  return <Map />;
};
