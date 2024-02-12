import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createContext } from "react";

export const ThemeContext = createContext()

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContext.Provider value={{theme : "light"}}>
    <App />
  </ThemeContext.Provider>
)
