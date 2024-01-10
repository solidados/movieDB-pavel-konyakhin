import { useEffect, useState } from 'react';
import { fetchedData } from "../../helpers/api.js";

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
        <img src={`${IMG_URL}${movieData.poster_path}`} alt="Poster" />
        <span className="card-vote">{Number(movieData.vote_average).toFixed(1)}</span>
      </div>
      <div className="card-descr">
        <h3 className="card-title">{movieData.title}</h3>
        <p>{movieData.tagline}</p>
      </div>
    </div>
  );
};

export default MovieCard;
