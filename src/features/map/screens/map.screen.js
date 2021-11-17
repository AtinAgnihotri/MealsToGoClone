import React from "react";
import MapView from "react-native-maps";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

import { Search } from "../components/search.component";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = () => (
  <>
    <Search />
    <Map />
  </>
);
