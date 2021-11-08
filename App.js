// import { Platform } from 'expo-modules-core';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

import { MealsList } from './src/components/MealsList';
import { SearchBox } from './src/components/SearchBox';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SearchBox />
        <MealsList />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: "center", 
    flex: 1,
    marginTop: StatusBar.currentHeight // To fix the Android StatusBar Issue
  }
});
