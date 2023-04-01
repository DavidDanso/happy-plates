import React, { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
import Favorites from "./Components/Favorites/Favorites";

const AppContext = createContext();
const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (idMeal, strMeal) => {
    // Find the meal with the matching id
    const mealToAdd = meals.find((meal) => meal.idMeal === idMeal);

    // Check if the meal is already in the favorites list
    const isAlreadyFavorite = favorites.some((meal) => meal.idMeal === idMeal);

    // If the meal is already a favorite, don't add it again
    if (isAlreadyFavorite) {
      alert(`${strMeal} has already been added to favorite.`);
      return;
    }

    // Add the meal to the favorites list
    const updatedFavorites = [...favorites, mealToAdd];
    setFavorites(updatedFavorites);
  };

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);

    // Add the meals to the favorites list
    setFavorites(updatedFavorites);
  };

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      {
        data.meals ? setMeals(data.meals) : setMeals([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  const fetchRandomMeal = () => {
    fetchMeals(randomMeal);
  };

  useEffect(() => {
    fetchMeals("https://www.themealdb.com/api/json/v1/1/search.php?s=");
  }, []);

  useEffect(() => {
    if (query) {
      fetchMeals(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
    }
  }, [query]);

  //
  return (
    <AppContext.Provider
      value={{
        loading,
        meals,
        setQuery,
        fetchRandomMeal,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
