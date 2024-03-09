import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import Products from '../Pages/Products'
import { Navbar } from './Navbar'
import About from '../Pages/About'

const AllRoutes = () => {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/products' element={<Products/>}/>
            </Routes>
        </div>
    )
}

export {AllRoutes}