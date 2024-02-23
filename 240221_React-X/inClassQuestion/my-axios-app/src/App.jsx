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

  async function postRequest() {
    try {
      
      const config = {
        method: "post",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
          id: 103424,
          title: "Bang...Bang",
          body: "boom bAAAmmmmmmmmm"
        }
      }

      const res = await axios(config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button onClick={fetchDataAxios}>Get Post</button>
      <button onClick={postRequest}>Make Post Req..</button>
    </>
  )
}

export default App