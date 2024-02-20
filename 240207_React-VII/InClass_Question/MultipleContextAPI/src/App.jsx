import { useContext, useState } from 'react'
import './App.css'

import { AuthContext } from './components/AuthConextProvider';
import { ThemeContext } from './components/ThemeContextProvider';


function App() {
  const {isAuth, setAuth, token, setToken} = useContext(AuthContext);
  const {theme , setTheme} = useContext(ThemeContext);


  return (
    <>
      <h1>Vite + React</h1>
      <h3>{token}</h3>
      <h3>{theme}</h3>
      <button onClick={()=>{setTheme((prevTheme)=>{prevTheme == "dark" ? "light" : "dark"})}}>Toggle Theme</button>
    </>
  )
}

export default App
