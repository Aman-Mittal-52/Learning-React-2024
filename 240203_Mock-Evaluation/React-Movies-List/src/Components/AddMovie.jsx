import React, { useState } from "react";

const AddMovie = () => {

  const [body, setBody] = useState({
    id:Date.now(),
    poster: "",
    title: "",
    year: "",
    imdbID: "",
    type: "",
    rating: ""
  });

  async function AddMovie() {
    try {
      let res = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setBody(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    AddMovie()
  }

  return (
    <div data-testid="add-movie" onSubmit={handleSubmit}>
      <h1>Add Movie</h1>
      <form data-testid="add-movie-form">
        <label htmlFor="title">Titl:</label>
        <input name="title" type="text" onChange={handleChange} />
        <br />
        <label htmlFor="year">Year:</label>
        <input name="year" type="text" onChange={handleChange} />
        <br />
        <label htmlFor="imbdID">IMDB ID:</label>
        <input name="imdbID" type="text" onChange={handleChange} />
        <br />
        <label htmlFor="type">Type:</label>
        <select name="type" id="" onChange={handleChange}>
          <option value="">Select a type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
        <br />
        <label htmlFor="rating">Rating:</label>
        <input name='rating' type="text" onChange={handleChange} />
        <br />
        <label htmlFor="poster">Poster:</label>
        <input type="text" name="poster" onChange={handleChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMovie;
