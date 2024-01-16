import React, { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import MovieCard from "../components/movieCard/MovieCard.jsx";

const FavoritePage = () => {
  const { favoriteMovies } = useContext(FavoriteContext);

  return (
    <div className="movie-container">
      <h1>Favorite Movies</h1>
      <div className="movie-list">
        {favoriteMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
