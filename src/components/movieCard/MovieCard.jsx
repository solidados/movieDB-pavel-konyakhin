import { useMovieData } from "./hooks/useMovieData.js";

// ui
import MovieVote from "./ui/MovieVote.jsx";
import MovieDescription from "./ui/MovieDescription.jsx";
import MoviePoster from "./ui/MoviePoster.jsx";

// styles
import './styles/movieCard.scss'

const MovieCard = ({ movie }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const { movieData, isDescriptionVisible, handleMouseEnter, handleMouseLeave } = useMovieData();

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="card-poster">
        <MoviePoster moviePath={`${IMG_URL}${movie.poster_path}`} />
        <MovieVote voteAverage={movie.vote_average} />
      </div>
      {/*{isDescriptionVisible && (*/}
      {/*  <MovieDescription*/}
      {/*    title={movie.title}*/}
      {/*    overview={movie.overview}*/}
      {/*    isVisible={isDescriptionVisible}*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
};

export default MovieCard;
