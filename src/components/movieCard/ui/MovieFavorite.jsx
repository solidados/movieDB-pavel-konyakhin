import React, { useState, useEffect, useContext } from 'react';
import { FavoriteContext } from "../../../context/FavoriteContext.jsx";

const MovieFavorite = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { updateFavoriteMovies } = useContext(FavoriteContext);

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovieIds')) || [];

    const updatedFavoriteMovies = favoriteMovies.includes(movie.id)
      ? favoriteMovies.filter((id) => id !== movie.id)
      : [...favoriteMovies, movie.id];

    localStorage.setItem('favoriteMovieIds', JSON.stringify(updatedFavoriteMovies));
    setIsFavorite(updatedFavoriteMovies.includes(movie.id));
    updateFavoriteMovies();
  };

  useEffect(() => {
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovieIds')) || [];
    setIsFavorite(favoriteMovies.includes(movie.id));
  }, []);

  return (
    <form method="post">
      <button
        type="button"
        name="favorite"
        onClick={handleFavoriteToggle}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? '★' : '☆'}
      </button>
    </form>
  );
};

export default MovieFavorite;
