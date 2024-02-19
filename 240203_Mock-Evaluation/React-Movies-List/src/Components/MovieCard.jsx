import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div data-testid="movie-card" className="card">
      <img src={movie.poster} alt="poster" />
      <h2>{movie.title}</h2>
      <h4>Year: {movie.year}</h4>
      <h6>ID: {movie.imdbID}</h6>
      <p>Type: {movie.type}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
