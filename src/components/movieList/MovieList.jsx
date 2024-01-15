import { useEffect, useState } from "react";
import { fetchedData } from "../../helpers/api.js";

import MovieCard from "../movieCard/MovieCard.jsx";
import MovieDetails from "../modal/MovieDetails.jsx";

import './movieList.scss'

const MovieList = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await fetchedData();
        setMoviesData(data.results);
      }
      catch (err) {
        console.error('Error fetching movie data:', err);
      }
    };

    fetchMovieData().catch((err) => new Error(err.message));
  }, []);

  const handleRemoveFavorite = (movieId) => {
    localStorage.removeItem(`movie_${movieId}`);
    setMoviesData((prevMoviesData) =>
      prevMoviesData.map((movie) =>
        movie.favorite ? { ...movie, favorite: false } : movie
      )
    );
  };

  const handleMovieDetails = (movie) => {
    return <MovieDetails movieId={movie.id} />
  }

  return (
    <main className="movie">
      <div className="movie-container">
        <h1>Popular Movies</h1>
        <div className="movie-list">
          {moviesData.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onRemoveFavorite={handleRemoveFavorite}
              onClick={handleMovieDetails}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MovieList;
