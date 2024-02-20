import React, { createContext } from 'react'
import App from '../App'

export const ThemeContext = createContext();

export default function ThemeContextProvider() {
  return (
    <ThemeContext.Provider>
      <App />
    </ThemeContext.Provider>
  )
}
