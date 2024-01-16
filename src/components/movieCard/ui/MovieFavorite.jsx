import React, { useState, useEffect } from 'react';

const MovieFavorite = ({ movie }) => {
  const [favoriteMovieIds, setFavoriteMovieIds] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();

    let updatedIdsArr = JSON.parse(localStorage.getItem('favoriteMovieIds'));
    if (!favoriteMovieIds.includes(movie.id)) {
      updatedIdsArr.push(movie.id)
      setIsFavorite(true)
    } else {
      updatedIdsArr = updatedIdsArr.filter((id) => id !== movie.id)
      setIsFavorite(false)
    }
    localStorage.setItem('favoriteMovieIds', JSON.stringify(updatedIdsArr))
    setFavoriteMovieIds(JSON.parse(localStorage.getItem('favoriteMovieIds')))
  };

  useEffect(() => {
    const favoriteMovies = localStorage.getItem('favoriteMovieIds')
    if (!favoriteMovies) {
      localStorage.setItem('favoriteMovieIds', JSON.stringify([]))
    }
    setFavoriteMovieIds(JSON.parse(localStorage.getItem('favoriteMovieIds')))
  }, []);

  useEffect(() => {
    if (favoriteMovieIds.length && favoriteMovieIds.includes(movie.id)) {
      setIsFavorite(true)
    }
  }, [favoriteMovieIds]);

  return (
    <form method="post">
      <button
        type="button"
        name="favorite"
        onClick={handleFavoriteToggle}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {/*☆*/}
        {isFavorite ? '★' : '☆'}
      </button>
    </form>
  );

};

export default MovieFavorite;
