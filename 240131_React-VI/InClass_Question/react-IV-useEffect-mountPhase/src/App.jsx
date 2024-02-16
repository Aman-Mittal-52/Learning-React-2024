import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data , setData] = useState([]);
  async function fetchAndDisplayData(){
    try {
      let res = await fetch("https://dummyjson.com/products");
      let data = await res.json();
      setData(data.products);
    } catch (error) {
    console.log(error);
    }
  }

  useEffect(()=>{
    fetchAndDisplayData()
  },[])

  return (
    <>
      <div className="products-container">{JSON.stringify(data)}</div>
    </>
  )
}

export default App
