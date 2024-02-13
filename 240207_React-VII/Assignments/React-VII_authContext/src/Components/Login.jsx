import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'

export default function Login() {
    const { isAuth, setAuth, token, setToken } = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            let res = await fetch("https://reqres.in/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            });
            let data = await res.json();
            if (res.ok) {
                setAuth((prevAuth) => !prevAuth)
                setToken(data.token)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <form data-testid="auth_form"  >
                <input
                    onChange={(e) => { setEmail(e.target.value) }}
                    type="email"
                    data-testid="email"
                    placeholder="Enter Email"
                />
                <br />
                <input
                    onChange={(e) => { setPassword(e.target.value) }}
                    type="password"
                    data-testid="password"
                    placeholder="Enter password"
                />
                <br />
                <input type="submit" onClick={handleSubmit} />

            </form>
        </div>
    )
}
