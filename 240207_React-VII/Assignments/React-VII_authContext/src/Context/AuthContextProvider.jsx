import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [isAuth, setAuth] = useState(false)
  const [token, setToken] = useState("")

  return (
    <AuthContext.Provider value={{ isAuth, setAuth, token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  )
}