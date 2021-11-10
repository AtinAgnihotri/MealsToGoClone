import React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantTitle = styled.Text`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const CardCover = styled(Card.Cover)`
  margin: ${(props) => props.theme.space[3]};
`;

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

  return (
    <Card elevation={5}>
      <CardCover key={name} source={imageSrc} />
      <RestaurantTitle>{name}</RestaurantTitle>
    </Card>
  );
};
