// ui
import MovieVote from "./ui/MovieVote.jsx";
import MoviePoster from "./ui/MoviePoster.jsx";

// styles
import './styles/movieCard.scss'

const MovieCard = ({ movie }) => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w200';

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <div className="card-poster">
        <MoviePoster moviePath={`${IMG_URL}${movie.poster_path}`} />
        <MovieVote voteAverage={movie.vote_average} />
      </div>
    </div>
  );
};

export default MovieCard;
