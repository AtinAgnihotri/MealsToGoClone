import React from "react";
import { List } from "react-native-paper";

const randomInt = () => {
  return Math.ceil(Math.random() * 10);
};

const MenuAccordian = ({ name, icon, items, expanded, onPress }) => (
  <List.Accordion
    title={name}
    left={(props) => <List.Icon {...props} icon={icon} />}
    expanded={expanded}
    onPress={() => onPress()}
  >
    {items.map((item) => {
      return (
        <List.Item
          title={item}
          key={`${name}-${icon}-${item}-${randomInt()}`}
        />
      );
    })}
  </List.Accordion>
);

export const BreakfastAccordian = ({ expanded, onPress }) => (
  <MenuAccordian
    name="Breakfast"
    icon="food-apple"
    items={["eggs", "stuffing"]}
    expanded={expanded}
    onPress={onPress}
  />
);

export const LunchAccordian = ({ expanded, onPress }) => (
  <MenuAccordian
    name="Lunch"
    icon="food"
    items={["eggs", "stuffing", "muffins"]}
    expanded={expanded}
    onPress={onPress}
  />
);

export const DinnerAccordian = ({ expanded, onPress }) => (
  <MenuAccordian
    name="Dinner"
    icon="food-fork-drink"
    items={["eggs", "stuffing"]}
    expanded={expanded}
    onPress={onPress}
  />
);

export const DrinkAccordian = ({ expanded, onPress }) => (
  <MenuAccordian
    name="Drinks"
    icon="beer"
    items={["rum", "whiskey"]}
    expanded={expanded}
    onPress={onPress}
  />
);
