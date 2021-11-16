import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { LoadingState, RestaurantList } from "./restaurants.styles";
import { Search } from "../components/search.component";

// Every styled component gets theme as their props
export const RestaurantScreen = () => {
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
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
};
