import { createContext, useState, type ReactNode, useContext } from "react";

type Theme = "light" | "dark"
interface ThemeContextType {
    theme : Theme,
    changeTheme : () => void,
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider ({ children } : { children : ReactNode}){
    const [theme, setTheme] = useState<Theme>("light");
    const changeTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{ theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) throw new Error("useTheme must be used within a ThemeProvider");

    return context;
}