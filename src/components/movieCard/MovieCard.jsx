import { useEffect, useState } from 'react';
import { fetchedData } from "../../helpers/api.js";

// ui
import MovieVote from "./ui/MovieVote.jsx";
import MovieDescription from "./ui/MovieDescription.jsx";
import MoviePoster from "./ui/MoviePoster.jsx";

// styles
import './movieCard.scss'

const MovieCard = () => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await fetchedData();
        setMovieData(data);
      }
      catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData()
      .catch(err => new Error(err.message));
  }, []);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <div className="card-poster">
        <MoviePoster moviePath={`${IMG_URL}${movieData.poster_path}`} />
        <MovieVote voteAverage={movieData.vote_average} />
      </div>
      <MovieDescription
        title={movieData.title}
        tagline={movieData.tagline}
      />
    </div>
  );
};

export default MovieCard;
