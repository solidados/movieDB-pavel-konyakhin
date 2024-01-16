import React, { useState, useEffect } from 'react';

const MovieFavorite = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    const favoriteMovies = JSON.parse(localStorage.getItem('favoriteMovieIds')) || [];

    const updatedFavoriteMovies = favoriteMovies.includes(movie.id)
      ? favoriteMovies.filter((id) => id !== movie.id)
      : [...favoriteMovies, movie.id];

    localStorage.setItem('favoriteMovieIds', JSON.stringify(updatedFavoriteMovies));
    setIsFavorite(updatedFavoriteMovies.includes(movie.id));
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
