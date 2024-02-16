import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [ count  , setCount ]= useState(0);
  function Auto_Counter(){
    return(
      <h1>Stop Watch : {count}</h1>
    )
  }

  useEffect(()=>{
    setInterval(() => {
      setCount(count+1)
    }, 1000);
  },[count])

  return (
    <>
      <Auto_Counter/>
    </>
  )
}

export default App
