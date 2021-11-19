import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { DummyScreen } from "./navutils.devhelper";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SafeArea } from "../../components/utilities/safe-area.component";

const Tab = createBottomTabNavigator();

const Maps = () => DummyScreen("Maps");
const Settings = () => DummyScreen("Settings");

export const AppNavigator = () => (
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
  </SafeArea>
);

// const DummyScreen = (name) => {
//   return (
//     <SafeArea>
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>{name}</Text>
//       </View>
//     </SafeArea>
//   );
// };
