import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
export const Dashboard = () => {
    const { token, logOut } = useContext(AuthContext);
    return (
        <div >
            <h3 data-testid="token" >Token: {token}</h3>
            <button data-testid="logout" onClick={logOut}>LOGOUT</button>
        </div>
    )
}
