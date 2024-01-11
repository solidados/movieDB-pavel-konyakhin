const MovieDescription = ({ title, tagline }) => {
  return (
    <div className="card-descr">
      <h3 className="card-title">{title}</h3>
      <p>{tagline}</p>
    </div>
  );
};

export default MovieDescription;
