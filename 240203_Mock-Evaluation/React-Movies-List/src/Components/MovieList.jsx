import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);
  const [filterBy, setFilterBy] = useState(null)
  const [sortBy, setSortBy] = useState(null)

  async function fetchMovies() {
    setLoading(true);
    let url;
    if (filterBy === null && sortBy === null) {
      url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`;
    } else if (filterBy !== null && sortBy === null) {
      url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies?type=${filterBy}`;
    } else if(filterBy === null && sortBy !== null){
      url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies?_sort=year&_order=${sortBy}`;
    }
    else if(filterBy !== null && sortBy !== null){
      url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies?type=${filterBy}&_sort=year&_order=${sortBy}`;
    }
    try {
      let res = await fetch(url);
      let data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false)
      console.log(error);
    }
  }

  function handleFilter(e) {
    setFilterBy(e.target.value)
  }

  function handleSort(e) {
    e.target.value == "oldest-first" ? setSortBy("asc") : setSortBy("desc")
  }

  useEffect(() => {
    fetchMovies()
  }, [sortBy, filterBy])

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
        <select data-testid="sort" onChange={handleSort}>
          <option value="">--</option>
          <option value="oldest-first">Oldest first</option>
          <option value="newest-first">Newest first</option>
        </select>
      </div>
      <div>
        <label>Filter By Type</label>
        <select data-testid="filter" onChange={handleFilter}>
          <option value="">--</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
      </div>
      {/* Either Loading component or below div with `data-testid="movie-container"` should exist on DOM at a time */}
      <div data-testid="movie-container" id="content-box">
        {
          data.map((ele) => {
            return <MovieCard key={ele.id} movie={ele} />
          })
        }
        {/* render all the movies data with the help of MovieCard component here */}
      </div>
    </div>
  );
};

export default MovieList;
