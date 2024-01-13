import { useEffect, useState } from "react";
import { fetchedMovie } from "../../helpers/api.js";

import './movieDetails.scss';

const MovieDetails = ({ movieId, closeModal }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const IMG_URL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    fetchedMovie(movieId)
      .then((details) => {
        setMovieDetails(details)
      })
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={`${IMG_URL}${movieDetails.poster_path}`} alt={movieDetails.title} className="poster" />
        <div className="details">
          <h2>{movieDetails.title}</h2>
          <p><span>Release Date:</span> {movieDetails.release_date}</p>
          <p><span>Genres:</span> {movieDetails.genres.map((genre) => (<span key={genre.name}>{genre.name}</span>))}
          </p>
          <p><span>Overview:</span> {movieDetails.overview}</p>
        </div>
      </div>
      <button onClick={closeModal}>X</button>
    </div>
  );
};

export default MovieDetails;
