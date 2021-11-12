import React from "react";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantAddress,
  CardCover,
  RestaurantInfo,
  RestaurantIcon,
  RestaurantRatings,
  Section,
  SectionEnd,
  RestaurantRatingsContainer,
  OpenContainer,
  Open,
} from "./restaurants-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Nanjing_Hunan_Road_Ajisen_Ramen.jpg/1600px-Nanjing_Hunan_Road_Ajisen_Ramen.jpg",
    ],
    address = "100, Random Street, Random Citys",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const imageSrc = {
    uri: photos[1],
  };

  const iconSource = {
    uri: photos[0],
  };

  const ratingArr = Array.from(new Array(Math.floor(rating)));
  console.log(ratingArr); //

  return (
    <RestaurantCard elevation={5}>
      <CardCover key={name} source={imageSrc} />
      <RestaurantInfo>
        <Text variant="label">{name}</Text>
        <Section>
          <RestaurantRatingsContainer>
            {RestaurantRatings(rating)}
          </RestaurantRatingsContainer>
          <SectionEnd>
            <Spacer position="left" size="medium">
              {isClosedTemporarily && (
                <Text variant="error">Closed Temporarily</Text>
              )}
            </Spacer>
            <Spacer position="left" size="medium">
              {isOpenNow && !isClosedTemporarily && (
                <OpenContainer>
                  <Open />
                </OpenContainer>
              )}
            </Spacer>
            <Spacer position="left" size="large">
              <RestaurantIcon source={iconSource} />
            </Spacer>
          </SectionEnd>
        </Section>
        <RestaurantAddress>{address}</RestaurantAddress>
      </RestaurantInfo>
    </RestaurantCard>
  );
};
