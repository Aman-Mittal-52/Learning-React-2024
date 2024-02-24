import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider({children}) {

    const [token, setToken] = useState('');
    const [isAuth, setAuth] = useState(false);

    const authState = {
        token,
        setToken,
        isAuth,
        setAuth
    }

    const logout = ()=>{
        setToken('');
        setAuth(false)
    }

    return(
        <AuthContext.Provider value={{authState, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
