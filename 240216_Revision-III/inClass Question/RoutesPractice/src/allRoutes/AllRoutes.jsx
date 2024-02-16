import {Routes,Route} from 'react-router-dom';

import Users from '../pages/users';
import Login from '../pages/Login';
import Home from '../pages/Home';

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Users' element={<Users/>}/>
            <Route path='/Login' element={<Login/>}/>
        </Routes>
    )
}

export default AllRoutes;