import { createContext, useState } from "react";

export const ThemeContext = createContext({});

function ThemeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);

    return <ThemeContext.Provider value={{setDarkMode, darkMode}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider