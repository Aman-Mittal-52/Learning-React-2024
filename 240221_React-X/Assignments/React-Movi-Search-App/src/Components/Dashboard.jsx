import { useEffect, useState } from 'react';
import './Dashboard.css'
import axios from 'axios';
import { queries } from '@testing-library/react';

function Dashboard() {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState('');

  async function fetchMoviesAxios(query) {
    try {
      const data = await axios({
        method: 'get',
        baseURL: `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`,
        url: '/movies',
        params: {
          q: query
        }
      })
      setData(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchMoviesAxios(movie);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, [movie]);

  return (
    <div data-testid="dashboard">
      <h1>Movie Search</h1>
      {/* Add input tag here  */}
      <input type="search" placeholder="Search Movies" name="" id="" data-testid="search_key" onChange={(e) => { setMovie(e.target.value) }} />
      <div data-testid="movie_results">
        {data.map((e, i) => {
          return (
            <div key={i} className='movie-card'>
              <h3>Title: {e.title}</h3>
              <p>Year: {e.year}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Dashboard;
