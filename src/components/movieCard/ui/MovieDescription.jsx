const MovieDescription = ({ title, tagline, isVisible }) => {
  const classes = `card-descr ${isVisible ? 'visible' : ''}`;

  return (
    <div className={classes}>
      <h3 className="card-title">{title}</h3>
      <p>{tagline}</p>
    </div>
  );
};

export default MovieDescription;
