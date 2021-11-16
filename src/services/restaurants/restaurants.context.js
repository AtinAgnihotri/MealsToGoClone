import React, {
  useState,
  createContext,
  useMemo,
  useEffect,
  useContext,
} from "react";

import { restaurantsRequest, transformResult } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (location) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(location)
        .then(transformResult)
        .then((restaurantsResults) => {
          setRestaurants(restaurantsResults);
          setIsLoading(false);
        })
        .catch((err) => {
          setLoadingError(err);
          setIsLoading(false);
        });
    }, 1500);
  };

  useEffect(() => {
    if (location) {
      const locationStr = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationStr);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        loadingError,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
