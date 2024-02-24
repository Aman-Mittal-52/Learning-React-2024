import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard'
import SingleRestaurantPage from './SingleRestaurantPage'

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/:user_id' element={<SingleRestaurantPage />} />
        <Route path='*' element={<h1>Error</h1>} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
