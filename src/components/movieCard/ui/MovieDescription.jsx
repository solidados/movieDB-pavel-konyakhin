const MovieDescription = ({ title, overview, isVisible }) => {
  const classes = `card-descr ${isVisible ? 'visible' : ''}`;

  return (
    <div className={classes}>
      <h3 className="card-title">{title}</h3>
      <p>{overview}</p>
    </div>
  );
};

export default MovieDescription;
