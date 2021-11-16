import styled from "styled-components";
import { ActivityIndicator } from "react-native-paper";
import React from "react";

export const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoaderContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Loader = styled(ActivityIndicator).attrs((props) => ({
  animating: true,
}))`
  color: tomato;
  width: ${(props) => props.theme.sizes[4]};
  height: ${(props) => props.theme.sizes[4]};
`;

export const LoadingState = () => (
  <LoaderContainer>
    <ActivityIndicator size="large" color="tomato" animating={true} />
  </LoaderContainer>
);
