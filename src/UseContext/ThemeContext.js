import { useState, createContext } from "react";

const themeContext = createContext();

function ThemeProvider({ children }){
    const [theme,setTheme] = useState('dark');

    const handleToggle = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    const value = {
        theme,
        handleToggle
    }
     return(
        <themeContext.Provider value={value}>
           {children}
        </themeContext.Provider>
     )
}

export {themeContext,ThemeProvider}