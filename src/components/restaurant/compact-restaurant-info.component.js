import React from "react";
import { TouchableOpacity } from "react-native";
import { Platform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";

import { Text } from "../typography/text.component";

const CompactContainer = styled.View`
  justify-content: center;
  align-items: center;
  max-width: ${(props) => props.theme.sizes[5]};
  padding: ${(props) => props.theme.space[1]};
  border-radius: ${(props) => props.theme.sizes[0]};
  flex: 1;
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

export const CompactRestaurantInfo = ({ restaurant }) => {
  const { name, photos } = restaurant;
  const imageSrc = {
    uri: photos[0],
  };
  const CompactRestaurantImage = isAndroid ? CompactWebView : CompactImage;
  return (
    // <TouchableOpacity>
    <CompactContainer>
      <CompactRestaurantImage source={imageSrc} />
      <Text center variant="caption" numberOfLines={3}>
        {name}
      </Text>
    </CompactContainer>
    // </TouchableOpacity>
  );
};
