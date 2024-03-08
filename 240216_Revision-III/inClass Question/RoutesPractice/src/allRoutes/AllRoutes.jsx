import { Routes, Route } from 'react-router-dom';

import Users from '../pages/users';
import Login from '../pages/Login';
import Home from '../pages/Home';
import PrivateRoute from './PrivateRoute';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Users" element={<PrivateRoute><Users /></PrivateRoute>} />
        </Routes>
    )
}

export default AllRoutes;