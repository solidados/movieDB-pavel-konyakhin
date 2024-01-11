const MovieVote = ({ voteAverage }) => {
  return (
    <span className="card-vote">{Number(voteAverage).toFixed(1)}</span>
  );
};


export default MovieVote;
