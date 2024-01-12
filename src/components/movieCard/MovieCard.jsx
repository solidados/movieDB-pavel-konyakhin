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

const Favorite = ({ movie, onRemoveFavorite }) => {
  const handleFavoriteToggle = () => {
    const updatedMovie = { ...movie, favorite: !movie.favorite };
    localStorage.setItem(`movie_${movie.id}`, JSON.stringify(updatedMovie));

    if (!updatedMovie.favorite) {
      onRemoveFavorite(movie.id);
    }
  };

  return (
    <form method="post">
      <button
        type="button"
        name="favorite"
        onClick={handleFavoriteToggle}
        aria-label={movie.favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {movie.favorite ? "★" : "☆"}
      </button>
    </form>
  );
};

export default MovieCard;
