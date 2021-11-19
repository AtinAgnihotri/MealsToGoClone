import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { DummyScreen } from "./navutils.devhelper";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SafeArea } from "../../components/utilities/safe-area.component";
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { RestaurantContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";

const Tab = createBottomTabNavigator();

const Maps = () => DummyScreen("Maps");
const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <>
      {DummyScreen("Settings")}
      <Button onPress={onLogout}>Logout</Button>
    </>
  );
};

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
      </RestaurantContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
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
