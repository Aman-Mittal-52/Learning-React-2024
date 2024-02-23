import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  const BASE_PRODUCTION_URL = import.meta.env.VITE_BASE_PRODUCTION;
  const BASE_DEV_URL = import.meta.env.VITE_BASE_DEV;
  const currentEnvironment = import.meta.env.MODE

  const baseURL = currentEnvironment === 'production' ? BASE_PRODUCTION_URL : BASE_DEV_URL;
  // if the environments is development then the baseURL become :
  // https://localhost:3000
  // if the environments is production then the baseURL become :
  //example : https://jsonplaceholder.typicode.com/posts
  // The online API URL used for production basis

  const configExampleWithAll = {
    method: "post",
    baseURL: baseURL, // it could be localhost or jsonplaceholder.typicode.com depends upon the environment.
    url: "/posts",
    data: {
      id: 103424,
      title: "Bang...Bang",
      body: "boom bAAAmmmmmmmmm"
    }
  }

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
        params: {
          page: 2
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
      <h1>Current Environment</h1>
      <h1>{currentEnvironment}</h1>
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
