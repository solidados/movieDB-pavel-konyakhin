const MovieFavorite = ({ movie, onRemoveFavorite }) => {
  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    const updatedMovie = { ...movie, favorite: !movie.favorite };
    localStorage.setItem(`movie_${movie.id}`, JSON.stringify(updatedMovie));

    if (!updatedMovie.favorite && onRemoveFavorite) {
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

export default MovieFavorite;
