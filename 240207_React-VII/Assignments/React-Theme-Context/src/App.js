import React, { useContext } from 'react'
import { Dashboard } from './Components/Dashboard'
import { ThemeContext } from './Context/ThemeContextProvider';

export default function App() {
  const {currentTheme, setTheme} = useContext(ThemeContext)
  const lightTheme = {
    backgroundColor : "black",
    color:"white"
  }
  const darkTheme = {
    backgroundColor : "white",
    color:"black"
  }
  return (
    <div style={currentTheme ? lightTheme : darkTheme}>
        <Dashboard />
    </div>
  )
}
