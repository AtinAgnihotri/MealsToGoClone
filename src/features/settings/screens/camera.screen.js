import React, { useState, useEffect, useRef, useContext } from "react";
import { Camera } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ProfileCamera,
  CameraControlBar,
  CameraClickControl,
} from "../components/camera.styles";
import { DummyScreen } from "../../../infrastructure/navigation/navutils.devhelper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);
  const [hasPermission, setHasPermission] = useState(null);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-profile-pic`, photo.uri);
      navigation.goBack();
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return DummyScreen(
      "Please grant access to camera to set your profile photo"
    );
  }

  return (
    <>
      <ProfileCamera ref={(camera) => (cameraRef.current = camera)} />
      <CameraControlBar>
        <CameraClickControl onPress={snap} />
      </CameraControlBar>
    </>
  );
};
