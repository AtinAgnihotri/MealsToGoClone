import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";

import { RestaurantInfoCard } from "../components/restaurants-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { SafeArea } from "../../../components/utilities/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { LoadingState, RestaurantList } from "./restaurants.styles";
import { Search } from "../components/search.component";

// Every styled component gets theme as their props
export const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading, loadingError } =
    useContext(RestaurantContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isLoading && <LoadingState />}
      {!isLoading && restaurants && (
        <>
          {isToggled && (
            <FavouritesBar
              favourites={favourites}
              onNavigate={navigation.navigate}
            />
          )}
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
        </>
      )}
    </SafeArea>
  );
};
