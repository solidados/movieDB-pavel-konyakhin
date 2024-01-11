import { useState, useEffect } from "react";
import { fetchedData } from "../../../helpers/api.js";

export const useMovieData = () => {
  const [movieData, setMovieData] = useState(null)
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await fetchedData()
        setMovieData(data)
      }
      catch (err) {
        console.error('Error fetching movie data:', err);
      }
    }

    fetchMovieData().catch(err => new Error(err.message))
  }, []);

  const handleMouseEnter = () => {
    setIsDescriptionVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDescriptionVisible(false);
  };

  return { movieData, isDescriptionVisible, handleMouseEnter, handleMouseLeave };
};
