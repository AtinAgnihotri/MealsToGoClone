import React from "react";
import { Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";

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
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const RestaurantRatings = (ratings) =>
  Array.from(new Array(Math.floor(ratings))).map(() => (
    <SvgXml xml={star} width={20} height={20} />
  ));

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OpenContainer = styled.View`
  flex-direction: row-reverse;
`;

const OpenIcon = () => (
  <SvgXml xml={open} elevation={10} width={30} height={30} zIndex={10} />
);

const Open = styled(OpenIcon)`
  position: absolute;
`;

const CoverContainer = styled.View`
  postion: absolute;
  z-index: 0;
  elevation: 0;
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const ClosedLabel = styled.Text`
  color: ${(props) => props.theme.colors.ui.error};
`;

const RestaurantIcon = styled.Image`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
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
        <RestaurantTitle>{name}</RestaurantTitle>
        <Section>
          <RestaurantRatingsContainer>
            {RestaurantRatings(rating)}
          </RestaurantRatingsContainer>
          <SectionEnd>
            {isClosedTemporarily && (
              <>
                <ClosedLabel variant="label">Closed Temporarily</ClosedLabel>
                <Spacer variant="left.medium" />
              </>
            )}
            {isOpenNow && !isClosedTemporarily && (
              <>
                <OpenContainer>
                  <Open />
                </OpenContainer>
                <Spacer variant="left.large" />
              </>
            )}
            <RestaurantIcon source={iconSource} />
          </SectionEnd>
        </Section>
        <RestaurantAddress>{address}</RestaurantAddress>
      </RestaurantInfo>
    </RestaurantCard>
  );
};
