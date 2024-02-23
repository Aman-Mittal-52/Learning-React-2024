import { useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState([]);

  async function fetchDataAxios() {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <button onClick={fetchDataAxios}>Get Post</button>
    </>
  )
}

export default App
