import Users from "../pages/Users";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import About from "../pages/About";
import {Routes ,Route} from 'react-router-dom';

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Users" element={<Users/>}/>
            <Route path="/Login" element={<Login/>}/>
        </Routes>
    )
}

export default AllRoutes;