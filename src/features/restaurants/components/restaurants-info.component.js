import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Nanjing_Hunan_Road_Ajisen_Ramen.jpg/1600px-Nanjing_Hunan_Road_Ajisen_Ramen.jpg",
    ],
    address = "100, Random Street, Random Citys",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
