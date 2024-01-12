import { useState } from "react";

import MovieCard from "../components/movieCard/MovieCard.jsx";

const FavoritePage = () => {
  const [favoriteMovies, setFavoriteMovies] = useState(
    Object.keys(localStorage)
          .filter((key) => key.startsWith('movie_'))
          .map((key) => JSON.parse(localStorage.getItem(key)))
  );

  const handleRemoveFavorite = (movieId) => {
    const updatedFavorites = favoriteMovies.filter((movie) => movie.id !== movieId);
    setFavoriteMovies(updatedFavorites);
    localStorage.removeItem(`movie_${movieId}`);
  };

  return (
    <div className="movie-container">
      <h1>FavoritePage</h1>
      <div className="movie-list">
        {favoriteMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onRemoveFavorite={handleRemoveFavorite} />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
