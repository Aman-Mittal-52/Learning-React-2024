import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import AllRoutes from './allRoutes/AllRoutes'
import Navbar from './navBar/Navbar';

function App() {

  return (
    <>
      <Navbar/>
      <AllRoutes/>
    </>
  )
}

export default App
