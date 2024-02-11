import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data , setData] = useState([]);
  const [loading ,setLoading] = useState(false);
  const [error ,setError] = useState(null);

  async function fetchAndDisplayData(){
    setLoading(true);
    try {
      let res = await fetch("http://localhost:3000/tasks");
      let data = await res.json();
      setData(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setError(error)
    }
  }

  function Data({id, isCompleted, assignee}){
    return(
      <div className='data'>
        <p>{id}</p>
        <p>{isCompleted.toString()}</p>
        <p>{assignee}</p>
      </div>
    )
  }
  useEffect(()=>{
    fetchAndDisplayData()
  },[])

  return (
    <div className="App">
      <h1>fsdff</h1>
      {data.map((ele) => (
        <Data key={ele.id} id={ele.id} isCompleted={ele.isCompleted} assignee={ele.assignee} />
      ))}
    </div>
  );
}

export default App;
