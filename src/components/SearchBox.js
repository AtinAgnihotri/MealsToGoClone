import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Searchbar } from "react-native-paper";

import { spacing } from "../utils/sizes";

export function SearchBox() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.innerItem}>Search</Text> */}
      <Searchbar
        style={styles.searchbar}
        placeholder="Search something here . . ."
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.1,
    // backgroundColor: "green",
    flexDirection: "row",
    padding: spacing.medium,
  },
  searchbar: {
    flex: 1,
  },
});
