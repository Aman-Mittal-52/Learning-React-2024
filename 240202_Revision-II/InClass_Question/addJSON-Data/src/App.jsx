import { useEffect, useState } from 'react';
import './App.css';
import Task from "./components/tasks";
import AddTask from "./components/addTask";

async function postData(dataInput) {
  try {
    let res = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dataInput)
    })
    let data = await res.json();
    return data
  } catch (error) {
    console.log(error)
  }
}

function App() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchAndDisplayData() {
    setLoading(true);
    try {
      let res = await fetch("http://localhost:3000/tasks");
      let data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(true);
    }
  }

  async function postReq(data) {
    try {
      let res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      let newData = res.json();
      return newData
    } catch (error) {
      console.log(error);
    }
  }

  async function addDataUI(newTask){
    try {
      await postData(newTask);
      fetchAndDisplayData()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAndDisplayData()
  }, [])

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  }

  if (error) {
    return (<h1>Error... Please reload the page or visit later..... <a href="https://sites.google.com/site/populardoodlegames/">Play game while waiting</a></h1>)
  }

  return (
    <>
      <AddTask addDataUI={addDataUI}/>
      <hr />
      <h1>Task List</h1>
      <hr />
      {
        data.map((ele) =>
          <Task key={ele.id} {...ele} />
        )
      }
    </>
  )
}

export default App
