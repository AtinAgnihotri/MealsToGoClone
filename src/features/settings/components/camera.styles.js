import React from "react";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ProfileCamera = styled(Camera).attrs({
  type: Camera.Constants.Type.front,
})`
  flex: 1;
`;

export const CameraControlBar = styled.View`
  background-color: black;
  justify-content: center;
  align-items: center;
  flex: 0.2;
`;

const CameraClickControlBorder = styled.View`
  border-color: white;
  border-style: solid;
  border-width: 5px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

const CameraClickControlTouchable = styled(TouchableOpacity)`
  background-color: red;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  margin: 5px;
`;

export const CameraClickControl = (props) => (
  <CameraClickControlBorder>
    <CameraClickControlTouchable {...props} />
  </CameraClickControlBorder>
);
