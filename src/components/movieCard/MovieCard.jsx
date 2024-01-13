import { useState } from "react";

import MovieVote from "./ui/MovieVote.jsx";
import MoviePoster from "./ui/MoviePoster.jsx";
import MovieFavorite from "./ui/MovieFavorite.jsx";
import MovieDetails from "../modal/MovieDetails.jsx";

import './movieCard.scss'

const MovieCard = ({ movie, onRemoveFavorite }) => {
  const [isOpen, setIsOpen] = useState(false)
  const IMG_URL = 'https://image.tmdb.org/t/p/w200';

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <div className="card-poster" onClick={openModal}>
        <MoviePoster moviePath={`${IMG_URL}${movie.poster_path}`} />
        <MovieVote voteAverage={movie.vote_average} />
        <MovieFavorite movie={movie} onRemoveFavorite={onRemoveFavorite} />
      </div>
      {isOpen && (
        <>
          <MovieDetails movieId={movie.id} closeModal={closeModal} />
        </>
      )}
    </div>
  );
};

export default MovieCard;
