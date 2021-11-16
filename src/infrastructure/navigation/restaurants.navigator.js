import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { DummyScreen } from "./navutils.devhelper";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant-details.screen";

const RestaurantStack = createStackNavigator();

const DummyDetails = () => DummyScreen("Restaurant Details");

export const RestaurantsNavigator = ({ route: { params } }) => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        // ...TransitionPresets.ModalPresentationIOS, Ditching this due to whitespace in android
        ...TransitionPresets.ModalTransition,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantScreen"
        component={RestaurantScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
        initialParams={params}
      />
    </RestaurantStack.Navigator>
  );
};
