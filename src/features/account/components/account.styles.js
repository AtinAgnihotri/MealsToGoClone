import React from "react";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

import { SafeArea } from "../../../components/utilities/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";
import { Loader } from "../../../components/loader/loader.component";
import { Text } from "../../../components/typography/text.component";

const AccountBackgroundImage = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AccountLabel = styled.Text.attrs({
  variant: "label",
})`
  font-size: ${(props) => props.theme.fontSizes.h4};
`;

const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountBackground = ({ children }) => (
  <SafeArea>
    <AccountBackgroundImage>
      <AccountCover />
      {children}
    </AccountBackgroundImage>
  </SafeArea>
);

// justify-content: center;
// align-items: center;
export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

// width: ${(props) => props.theme.sizes[5]};
export const AccountButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

// height: ${(props) => props.theme.sizes[2]};
export const AccountInput = styled(TextInput).attrs({
  mode: "flat",
})`
  width: ${(props) => props.theme.sizes[5]};
`;

export const AccountLoadingState = styled(Loader).attrs({
  color: colors.brand.primary,
})`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
`;

export const AccountLoader = () => (
  <>
    <AccountLoadingState />
    <Text>Loading</Text>
  </>
);

export const AnimationContainer = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[2]};
`;

export const WatermelonAnimation = () => (
  <AnimationContainer>
    <LottieView
      key="animation"
      autoPlay
      loop
      resizeMode="cover"
      source={require("../../../../assets/watermelon.json")}
    />
  </AnimationContainer>
);
