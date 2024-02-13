import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
export const Dashboard = () => {
    const { token, setAuth, isAuth } = useContext(AuthContext);
    return (
        <div >
            <h3 data-testid="token" >Token: {token}</h3>
            <button data-testid="logout" onClick={() => { setAuth(!isAuth) }}>LOGOUT</button>
        </div>
    )
}
