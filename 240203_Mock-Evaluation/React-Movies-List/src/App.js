import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import './App.css'


const App = () => {
  const [toggleBtn, setToggleBtn] = useState(true);
  return (
    <div className="App">
      <h1>React Movies List</h1>
      {/* The below button should have text content as either `Show Movies`or `Add Movie` */}
      <button data-testid="toggle-btn" onClick={()=>{setToggleBtn(!toggleBtn)}}>{toggleBtn ?"Add Movie" : "Show Movies"}</button>
      <div data-testid="container">
        {/* Add the required components here either AddMovie or MovieList will exist on DOM at a time*/}
        {toggleBtn ? <MovieList/> : <AddMovie/>}
      </div>
    </div>
  );
};

export default App;
