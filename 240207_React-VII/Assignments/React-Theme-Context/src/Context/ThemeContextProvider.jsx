import React, { createContext, useState } from 'react'
import App from '../App'

export const ThemeContext = createContext();

export default function ThemeContextProvider({children}) {
  const [currentTheme, setTheme] = useState({isDarkTheme: false});

  return (
    <ThemeContext.Provider value={{currentTheme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
