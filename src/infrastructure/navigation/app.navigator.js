import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../components/utilities/safe-area.component";

const Tab = createBottomTabNavigator();

const Maps = () => DummyScreen("Maps");
const Settings = () => DummyScreen("Settings");

export const AppNavigator = () => (
  <SafeArea>
    <NavigationContainer>
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
          component={Maps}
          options={{
            tabBarLabel: "Maps",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </SafeArea>
);

const DummyScreen = (name) => {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{name}</Text>
      </View>
    </SafeArea>
  );
};
