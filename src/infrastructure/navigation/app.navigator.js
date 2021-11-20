import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SafeArea } from "../../components/utilities/safe-area.component";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { SettingsNavigator } from "./settings.navigator";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantContextProvider>
        <SafeArea>
          <Tab.Navigator
            initialRouteName="Restaurants"
            screenOptions={{
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
              headerShown: false,
            }}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestaurantsNavigator}
              options={{
                tabBarLabel: "Restaurants",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="restaurant" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="Maps"
              component={MapScreen}
              options={{
                tabBarLabel: "Maps",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="map" color={color} size={size} />
                ),
              }}
            />
            <Tab.Screen
              name="SettingsTab"
              component={SettingsNavigator}
              options={{
                tabBarLabel: "Settings",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="settings" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </SafeArea>
      </RestaurantContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
