import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { spacing } from "../utils/sizes";

export function MealsList() {
  return (
    <View style={styles.container}>
      <Text style={styles.innerItem}>Meals List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "blue",
    padding: spacing.small,
  },
  innerItem: {
    flex: 1,
  },
});
