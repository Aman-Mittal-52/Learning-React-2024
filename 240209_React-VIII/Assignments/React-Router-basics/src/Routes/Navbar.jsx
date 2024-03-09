import { Link } from "react-router-dom"

function Navbar() {
    return(
        <div className = "navbar" style={{display:"flex",justifyContent:"space-evenly"}}>
           <Link to={'/'}>Home</Link>
           <Link to={'/about'}>About</Link>
           <Link to={'/contact'}>Contact</Link>
           <Link to={'/products'}>Products</Link>
        </div>
    )
}

export { Navbar }