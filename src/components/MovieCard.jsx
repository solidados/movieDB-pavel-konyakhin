import { useEffect, useState } from 'react';
import { fetchedData } from "../helpers/api.js";

const MovieCard = () => {
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

    fetchMovieData();
  }, []);

  console.log(movieData);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Movie Card</h1>
      <h3 className="title">{movieData.title}</h3>
    </div>
  );
};

export default MovieCard;
