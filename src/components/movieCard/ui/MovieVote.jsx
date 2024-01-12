const MovieVote = ({ voteAverage }) => {
  return (
    <span className="card-vote">{(voteAverage).toFixed(1)}</span>
  );
};


export default MovieVote;
