import { useMovieData } from "./hooks/useMovieData.js";

// ui
import MovieVote from "./ui/MovieVote.jsx";
import MovieDescription from "./ui/MovieDescription.jsx";
import MoviePoster from "./ui/MoviePoster.jsx";

// styles
import './styles/movieCard.scss'

const MovieCard = () => {
  const IMG_URL = 'https://image.tmdb.org/t/p/w200';
  const { movieData, isDescriptionVisible, handleMouseEnter, handleMouseLeave } = useMovieData();

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="card-poster">
        <MoviePoster moviePath={`${IMG_URL}${movieData.poster_path}`} />
        <MovieVote voteAverage={movieData.vote_average} />
      </div>
      {isDescriptionVisible && (
        <MovieDescription
          title={movieData.title}
          tagline={movieData.tagline}
          isVisible={isDescriptionVisible}
        />
      )}
    </div>
  );
};

export default MovieCard;
