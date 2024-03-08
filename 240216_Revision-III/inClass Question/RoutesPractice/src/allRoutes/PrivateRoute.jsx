import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom";

function PrivateRoute({children}){
    const {authDetails} = useContext(AuthContext);

    return authDetails.isAuth ? children : <Navigate to={'/Login'} />
}

export default PrivateRoute;