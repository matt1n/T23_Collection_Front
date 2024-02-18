import { createContext, useState } from "react";

export const ThemeContext = createContext({});

function ThemeProvider({children}) {
    const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode")==="true");

    return <ThemeContext.Provider value={{setDarkMode, darkMode}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider