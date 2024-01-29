import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Add item to favorites
  const addFavorite = (item) => {
    setFavorites(prevFavorites => [...prevFavorites, item]);
  };

  // Remove item from favorites
  const removeFavorite = (itemId) => {
    setFavorites(prevFavorites => prevFavorites.filter(item => item.id !== itemId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
