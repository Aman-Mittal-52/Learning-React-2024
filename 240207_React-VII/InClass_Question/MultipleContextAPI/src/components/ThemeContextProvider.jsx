import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props){
    const [theme, setTheme] = useState("dark");

    return (
        <ThemeContext.Provider value={{theme , setTheme}}>
        {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;