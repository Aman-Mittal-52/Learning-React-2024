import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthContextProvider({children}) {
  const [isAuth, setAuth] = useState(false)
  const [token, setToken] = useState("")
  const logOut = ()=>{
    setAuth(false)
  }

  return (
    <AuthContext.Provider value={{ isAuth, setAuth, token, setToken, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}