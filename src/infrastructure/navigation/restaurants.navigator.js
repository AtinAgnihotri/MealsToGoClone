import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailsScreen } from "../../features/restaurants/screens/restaurant-details.screen";

const RestaurantStack = createStackNavigator();

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
