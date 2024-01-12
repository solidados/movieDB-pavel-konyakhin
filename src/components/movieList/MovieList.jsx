import { useEffect, useState } from "react";
import { fetchedData } from "../../helpers/api.js";
import MovieCard from "../movieCard/MovieCard.jsx";

import './movieList.scss'

const MovieList = () => {
  const [moviesData, setMoviesData] = useState([])

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await fetchedData()
        setMoviesData(data.results)
      }
      catch (err) {
        console.error('Error fetching movie data:', err);
      }
    }

    fetchMovieData().catch(err => new Error(err.message))
  }, []);

  return (
    <main className="movie">
      <div className="movie-container">
        <h1>Popular Movies</h1>
        <div className="movie-list">
          {moviesData.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

      </div>
    </main>
  );
};

export default MovieList;
