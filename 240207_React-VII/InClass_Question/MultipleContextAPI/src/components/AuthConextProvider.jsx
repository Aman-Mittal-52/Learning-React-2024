import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props){
    const [isAuth, setAuth] = useState(false);
    const [token, setToken] = useState("2342542");

    return(
        <AuthContext.Provider value={{isAuth, setAuth, token, setToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;