import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "INCREASE":
        return state + 1
      case "INCREASE-4":
        return state + 4
      case "DECREASE":
        return state - 1
      case "DECREASE-4":
        return state - 4
      default:
        return console.error("error not found your action")
    }
  }

  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <>
      <h1>{state}</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gridGap: "40px"
      }}>
        <button onClick={() => {
          dispatch({ type: 'INCREASE' })
        }}>Increase Count</button>
        <button onClick={() => {
          dispatch({ type: 'DECREASE' })
        }}>Decrease Count</button>
        <button onClick={() => {
          dispatch({ type: 'INCREASE-4' })
        }}>Increase Count by 4</button>
        <button onClick={() => {
          dispatch({ type: 'DECREASE-4' })
        }}>Decrease count by 4</button>
      </div>
    </>
  )
}

export default App
