import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, StatusBar } from "react-native";

// import { MealsList } from "./src/components/MealsList";
// import { SearchBox } from "./src/components/SearchBox";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      {/* <SafeAreaView style={styles.container}> */}
      {/* <SearchBox /> */}
      {/* <MealsList /> */}
      {/* <RestaurantScreen /> */}
      {/* </SafeAreaView> */}
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "space-between",
//     alignItems: "center",
//     flex: 1,
//     marginTop: StatusBar.currentHeight, // To fix the Android StatusBar Issue
//   },
// });
