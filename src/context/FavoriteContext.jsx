import React, { createContext, useState, useEffect } from 'react';
import { fetchedMovie } from "../helpers/api.js";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const favoriteMovieIds = JSON.parse(localStorage.getItem('favoriteMovieIds')) || [];
    Promise.all(favoriteMovieIds.map(fetchedMovie)).then(setFavoriteMovies);
  }, []);

  const updateFavoriteMovies = () => {
    const favoriteMovieIds = JSON.parse(localStorage.getItem('favoriteMovieIds')) || [];
    Promise.all(favoriteMovieIds.map(fetchedMovie)).then(setFavoriteMovies);
  };

  return (
    <FavoriteContext.Provider value={{ favoriteMovies, updateFavoriteMovies }}>
      {children}
    </FavoriteContext.Provider>
  );
};
