import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);

  async function fetchMovies() {
    setLoading(true);
    try {
      let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`);
      let data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false)
      console.log(error);
    }
  }
  useEffect(() => {
    fetchMovies()
  }, [])

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <div>
      <h1>Something went wrong.....</h1>
      <p>Please try again later...</p>
    </div>
  }
  return (
    <div data-testid="movie-list">
      <h1>Movies List</h1>
      <div>
        <label>Sort By Year</label>
        <select data-testid="sort"></select>
      </div>
      <div>
        <label>Filter By Type</label>
        <select data-testid="filter"></select>
      </div>
      {/* Either Loading component or below div with `data-testid="movie-container"` should exist on DOM at a time */}
      <div data-testid="movie-container" id="content-box">
        {
          data.map((ele) => {
            return <MovieCard key={ele.id} movie={ele}/>
          })
        }
        {/* render all the movies data with the help of MovieCard component here */}
      </div>
    </div>
  );
};

export default MovieList;
