import { mockImages, mocks } from "./mock";
import camelize from "camelize";

// mock => San Francisco: "37.7749295,-122.4194155"
export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject("No data found for " + location);
    resolve(mock);
  });
};

export const transformResult = ({ results = [] }) => {
  const camelizedResults = camelize(results);
  const newResults = camelizedResults.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      isClosedTemporarily:
        restaurant.businessStatus === "CLOSED_TEMPORARILY" ? true : false,
      isOpenNow: restaurant.openingHours && restaurant.openingHours.openNow,
      address: restaurant.vicinity,
    };
  });
  return newResults;
};
