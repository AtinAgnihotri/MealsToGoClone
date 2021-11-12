import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

export const RestaurantAddress = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const CardCover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space[3]};
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantInfo = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantRatingsContainer = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantRatings = (ratings) =>
  Array.from(new Array(Math.floor(ratings))).map(() => (
    <SvgXml xml={star} width={20} height={20} />
  ));

export const OpenContainer = styled.View`
  flex-direction: row-reverse;
`;

// changelog: removed elevation={10}
export const OpenIcon = () => (
  <SvgXml xml={open} width={30} height={30} zIndex={10} />
);

export const Open = styled(OpenIcon)`
  position: absolute;
`;

export const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const RestaurantIcon = styled.Image`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;
