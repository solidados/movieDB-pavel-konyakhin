import { useState } from "react";
import MovieCard from "../components/movieCard/MovieCard.jsx";

const FavoritePage = () => {
  const [favoriteMovies, setFavoriteMovies] = useState(
    Object.keys(localStorage)
          .filter((key) => key.startsWith('movie_'))
          .map((key) => JSON.parse(localStorage.getItem(key)))
  );

  const handleRemoveFavorite = (movieId) => {
    setFavoriteMovies((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((movie) => movie.id !== movieId);
      localStorage.removeItem(`movie_${movieId}`);
      return updatedFavorites;
    });
  };

  return (
    <div className="movie-container">
      <h1>Favorite Movies</h1>
      <div className="movie-list">
        {favoriteMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onRemoveFavorite={handleRemoveFavorite} />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
