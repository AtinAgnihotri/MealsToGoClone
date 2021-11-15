import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "./src/infrastructure/theme";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SafeArea } from "./src/components/utilities/safe-area.component";

const Tab = createBottomTabNavigator();

const Maps = () => DummyScreen("Maps");
const Settings = () => DummyScreen("Settings");

const tabActiveColor = "#e91e63";
const tabInActiveColor = "#666666";

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Restaurants"
              screenOptions={{
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
              }}
            >
              <Tab.Screen
                name="Restaurants"
                component={RestaurantScreen}
                options={{
                  tabBarLabel: "Home",
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
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const DummyScreen = (name) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{name}</Text>
    </View>
  );
};
