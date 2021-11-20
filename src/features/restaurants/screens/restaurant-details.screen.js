import React, { useState } from "react";
import { ScrollView } from "react-native";

import { SafeArea } from "../../../components/utilities/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import {
  BreakfastAccordian,
  LunchAccordian,
  DinnerAccordian,
  DrinkAccordian,
} from "../components/menu-accordians.component";

export const RestaurantDetailsScreen = ({ route }) => {
  const { item } = route.params;

  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={item} />
      <ScrollView>
        <BreakfastAccordian
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        />
        <LunchAccordian
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        />
        <DinnerAccordian
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        />
        <DrinkAccordian
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        />
      </ScrollView>
    </SafeArea>
  );
};
