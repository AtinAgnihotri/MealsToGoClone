import React from "react";
import { TouchableOpacity } from "react-native";
import { Platform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";

import { Text } from "../typography/text.component";

const CompactContainer = styled.View`
  align-items: center;
  padding: ${(props) => props.theme.space[1]};
  max-width: ${(props) => props.theme.sizes[5]};
  border-radius: ${(props) => props.theme.sizes[0]};
`;

const CompactImage = styled.Image`
  border-radius: ${(props) => props.theme.sizes[0]};
  width: ${(props) => props.theme.sizes[4]};
  height: ${(props) => props.theme.sizes[4]};
`;

const CompactWebView = styled(WebView)`
  border-radius: ${(props) => props.theme.sizes[0]};
  width: ${(props) => props.theme.sizes[4]};
  height: ${(props) => props.theme.sizes[4]};
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMapCallout = true }) => {
  const { name, photos } = restaurant;
  const imageSrc = {
    uri: photos[0],
  };
  const CompactRestaurantImage =
    isMapCallout && isAndroid ? CompactWebView : CompactImage;
  return (
    <CompactContainer>
      <CompactRestaurantImage source={imageSrc} />
      <Text center variant="caption" numberOfLines={3}>
        {name}
      </Text>
    </CompactContainer>
  );
};
