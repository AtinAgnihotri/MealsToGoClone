import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favourites_MealsToGo", jsonValue);
    } catch (e) {
      console.log("Favs saving error", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favourites_MealsToGo");
      if (jsonValue !== null) {
        setFavourites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log("Favs loading error", e);
    }
  };

  const add = (restaurant) => {
    if (!favourites.includes(favourites)) {
      setFavourites([...favourites, restaurant]);
    }
  };

  const remove = (restaurant) => {
    const newFavs = favourites.filter(
      (fav) => fav.placeId !== restaurant.placeId
    );
    setFavourites(newFavs);
  };

  useEffect(() => {
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
