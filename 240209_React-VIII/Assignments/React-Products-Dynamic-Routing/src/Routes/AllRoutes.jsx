import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AllProducts from '../Pages/AllProducts'
import ProductDetails from '../Pages/ProductDetails'

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<AllProducts />} />
                <Route path='/:product_id' element={<ProductDetails />} />
            </Routes>
        </div>
    )
}
