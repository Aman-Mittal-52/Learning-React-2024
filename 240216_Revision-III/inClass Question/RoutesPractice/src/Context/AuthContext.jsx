import { createContext, useState } from "react";

export const  AuthContext = createContext();

function AuthContextProvider(props){
    const [authDetails, SetAuthDetails] = useState({
        token:"",
        isAuth:false
    })

    return (
        <AuthContext.Provider value={{authDetails,SetAuthDetails}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
