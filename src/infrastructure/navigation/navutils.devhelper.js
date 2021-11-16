import React from "react";
import { View, Text } from "react-native";

import { SafeArea } from "../../components/utilities/safe-area.component";

export const DummyScreen = (name) => {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{name}</Text>
      </View>
    </SafeArea>
  );
};
