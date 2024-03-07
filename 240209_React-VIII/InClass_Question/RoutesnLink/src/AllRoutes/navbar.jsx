import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div>
            <Link to="/">Home</Link>
            <br />
            <Link to="/About">About</Link>
            <br />
            <Link to="/Contact">Contact</Link>
            <br />
            <Link to="/Users">Users</Link>
            <br />
            <Link to="/Login">Login</Link>
        </div>
    )
}