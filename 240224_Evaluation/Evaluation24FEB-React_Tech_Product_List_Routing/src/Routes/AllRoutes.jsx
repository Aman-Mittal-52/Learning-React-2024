import { Routes, Route } from 'react-router-dom'

import { AuthContext } from '../Context/AuthContext';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import PrivateRoute from '../Components/PrivateRoute';
import SingleProductPage from './SingleProductPage';
import { useContext } from 'react';

function AllRoutes() {

  const {authState} = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard/:product_id' element={authState.isAuth ? <SingleProductPage/> : <Login />}/>
        <Route path='*' element={<h1>Error page not found</h1>}/>
      </Routes>
    </div>
  );
}

export default AllRoutes;
