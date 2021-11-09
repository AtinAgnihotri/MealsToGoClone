import React from "react";
import { View, StyleSheet, Text, SafeAreaView, StatusBar } from "react-native";
import { Card, Searchbar } from "react-native-paper";
import { spacing } from "../../../utils/sizes";
import { RestaurantInfo } from "../components/restaurants-info.component";

export const RestaurantScreen = () => (
  <>
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
      {/* <MealsList /> */}
    </SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  container: {
    // justifyContent: "space-between",
    // alignItems: "center",
    flex: 1,
    marginTop: StatusBar.currentHeight, // To fix the Android StatusBar Issue
  },
  search: {
    // flex: 1,
    padding: spacing.medium,
  },
  list: {
    flex: 1,
    padding: spacing.medium,
    backgroundColor: "blue",
  },
});
