import camelize from "camelize";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) reject("No location found matching " + searchTerm);
    resolve(locationMock);
  });
};

export const transformLocation = (result) => {
  const { geometry = {} } = camelize(result.results)[0];
  const { lat, lng } = geometry.location;
  return { lat, lng };
};
