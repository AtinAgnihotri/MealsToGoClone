import React from "react";
import styled, { useTheme } from "styled-components/native";

const spacerSizes = {
  small: 1,
  medium: 2,
  large: 3,
};

const spacerPositions = {
  top: "margin-top",
  bottom: "margin-bottom",
  left: "margin-left",
  right: "margin-right",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = spacerSizes[size];
  const property = spacerPositions[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
