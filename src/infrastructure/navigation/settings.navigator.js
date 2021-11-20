import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { DummyScreen } from "./navutils.devhelper";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";

const FavouritesScreen2 = () => DummyScreen("Favourites");

const Stack = createStackNavigator();

export const SettingsNavigator = ({ route: { params } }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Favourites"
        component={FavouritesScreen}
        screenOptions={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};
