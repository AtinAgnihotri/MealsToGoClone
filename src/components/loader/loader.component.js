import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

const LoaderContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Loader = ({ color = "tomato" }) => (
  <LoaderContainer>
    <ActivityIndicator size="large" color={color} animating={true} />
  </LoaderContainer>
);
