import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const RestaurantTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantAddress = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const CardCover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space[3]};
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantInfo = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantRatingsContainer = styled.View`
  flex-direction: row;
`;

const RestaurantRatings = (ratings) =>
  Array.from(new Array(Math.floor(ratings))).map(() => (
    <SvgXml xml={star} width={20} height={20} />
  ));

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

  console.log(photos[0]);

  const imageSrc = {
    uri: photos[1],
  };

  const ratingArr = Array.from(new Array(Math.floor(rating)));
  console.log(ratingArr); //

  return (
    <RestaurantCard elevation={5}>
      <CardCover key={name} source={imageSrc} />
      <RestaurantInfo>
        <RestaurantTitle>{name}</RestaurantTitle>
        <RestaurantRatingsContainer>
          {RestaurantRatings(rating)}
        </RestaurantRatingsContainer>
        <RestaurantAddress>{address}</RestaurantAddress>
      </RestaurantInfo>
    </RestaurantCard>
  );
};
