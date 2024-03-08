import { createContext, useState } from "react"

export const AuthContext = createContext();

export default function AuthConextProvider({ children }) {
    const [isAuth, setAuth] = useState(false);
    const [token, setToken] = useState('');

    return (
        <AuthContext.Provider value={{ isAuth, setAuth, token, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}