// ui
import MovieVote from "./ui/MovieVote.jsx";
import MoviePoster from "./ui/MoviePoster.jsx";

// styles
import './movieCard.scss'

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
        <Favorite movie={movie} />
      </div>
    </div>
  );
};

const Favorite = ({ movie }) => {
  let favorite = movie.favorite

  return (
    <form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </form>
  )
}

export default MovieCard;
