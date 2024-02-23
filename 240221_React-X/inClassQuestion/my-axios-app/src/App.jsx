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

  async function putRequest() {
    try {
      
      const config = {
        method: "put",
        url: "https://reqres.in/api/users/2",
        data: {
          name: "Aman",
          job: "Blowing"
        }
      }

      const res = await axios(config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function patchRequest() {
    try {
      
      const config = {
        method: "patch",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        data: {
          title: "12 march ko dhoom machegi"
        }
      }

      const res = await axios(config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteRequest() {
    try {
      
      const config = {
        method: "delete",
        url: "https://jsonplaceholder.typicode.com/posts/1"
      }

      const res = await axios(config);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  async function paramsDataAxios() {
    try {
      
      const config = {
        url: "https://jsonplaceholder.typicode.com/posts",
        params:{
          page:2
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
      <button onClick={paramsDataAxios}>Get Post customly</button>
      <button onClick={postRequest}>Make Post Req..</button>
      <button onClick={putRequest}>Make Put Req..</button>
      <button onClick={patchRequest}>Make Patch Req..</button>
      <button onClick={deleteRequest}>Make Delete Req..</button>
    </>
  )
}

export default App
