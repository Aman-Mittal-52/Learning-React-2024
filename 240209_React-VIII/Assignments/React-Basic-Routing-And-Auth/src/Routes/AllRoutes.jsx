import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home'
import Login from '../Pages/Login'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import AllProducts from '../Pages/Products'
import Navbar from './Navbar'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/products' element={
                    <PrivateRoute>
                        <AllProducts />
                    </PrivateRoute>
                } />
            </Routes>
        </div>
    )
}

export { AllRoutes }