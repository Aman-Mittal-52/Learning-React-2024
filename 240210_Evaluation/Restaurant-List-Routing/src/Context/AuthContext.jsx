import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isAuth, setAuth] = useState(false);
    const [token, setToken] = useState(null);

    const authState = {
        isAuth,
        setAuth,
        token,
        setToken,
    }


    function loginUser(authValue, token) {
        setAuth(authValue);
        setToken(token);
    }

    function logoutUser() {
        setAuth(false);
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
