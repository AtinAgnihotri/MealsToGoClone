import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";

import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { LoadingState, RestaurantList } from "./restaurants.styles";
import { Search } from "../components/search.component";

// Every styled component gets theme as their props
export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading, loadingError } =
    useContext(RestaurantContext);
  return (
    <SafeArea>
      <Search />
      {isLoading && <LoadingState />}
      {!isLoading && restaurants && (
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetails", { item })
                }
              >
                <Spacer position="bottom" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
