import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function StopWatch(){
    return(
      <h1>Stop Watch</h1>
    )
  }
  const [show,setShow] = useState(false)

  return (
    <>
      {show ? <StopWatch/> : null}
      <button onClick={()=>{setShow(!show)}}>Toggle</button>
    </>
  )
}

export default App
