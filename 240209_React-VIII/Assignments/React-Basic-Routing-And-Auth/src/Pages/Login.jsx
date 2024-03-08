import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider';
import { Navigate } from 'react-router-dom';

export default function Login() {

    const { setAuth, setToken, isAuth } = useContext(AuthContext);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            })
            const data = await res.json();
            if (data.token) {
                setAuth(true)
                setToken(data.token)
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (isAuth) {
        return <Navigate to={'/products'}/>
    }
    return (
        <div>
            <form className="auth_form" onSubmit={handleSubmit} >
                <input

                    style={{ padding: "5px", margin: "10px", width: 200 }}
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                    className="email"
                    placeholder="Enter Email"
                />
                <br />
                <input
                    style={{ padding: "5px", margin: "10px", width: 200 }}
                    type="password"
                    value={password}
                    className="password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    placeholder="Enter password"
                />
                <br />
                <input className="submit" type="submit" />

            </form>

        </div>
    )
}