import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  Pressable,
  View,
  FlatList,
} from "react-native";

import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";
// padding: ${(props) => props.theme.space[1]};
// const FavouritesWrapper = styled.View`
//   margin: 10px;
// `;

// export const FavouritesBar = ({ favourites, navigation }) => (
//   <FavouritesWrapper>
//     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//       {favourites.map((restaurant) => {
//         const key = restaurant.name;
//         return (
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate("RestaurantDetails", { item: restaurant })
//             }
//             key={key}
//           >
//             <CompactRestaurantInfo restaurant={restaurant} />
//           </TouchableOpacity>
//         );
//       })}
//     </ScrollView>
//   </FavouritesWrapper>
// );
/*
const PressableCompactRestaurantInfo = ({ restaurant, onNavigate }) => (
  <Pressable
    onPress={() =>
      onNavigate("RestaurantDetails", {
        item: restaurant,
      })
    }
  >
    <CompactRestaurantInfo restaurant={restaurant} />
  </Pressable>
);

const FavouritedItem = styled(PressableCompactRestaurantInfo)`
  flex: 1;
  height: 10px;
`;

const FavouritesWrapper = styled.View`
  padding: 10px;
  height: 200px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            // <Spacer key={key} position="left" size="medium">
            //   <TouchableOpacity
            // onPress={() =>
            //   onNavigate("RestaurantDetail", {
            //     restaurant,
            //   })
            // }
            //   >
            // <CompactRestaurantInfo restaurant={restaurant}>
            //   <TouchableOpacity
            //     onPress={() =>
            //       onNavigate("RestaurantDetail", {
            //         restaurant,
            //       })
            //     }
            //   />
            <FavouritedItem
              restaurant={restaurant}
              key={key}
              navigation={onNavigate}
            />

            //  {/* </TouchableOpacity> }
            // </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
*/

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetails", {
                    item: restaurant,
                  })
                }
              >
                <CompactRestaurantInfo
                  restaurant={restaurant}
                  isMapCallout={false}
                />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
