import { createContext, useState, type ReactNode, useContext } from "react";

type Theme = "light" | "dark"
interface ThemeContextType { // this type is to make the context provides values it need
    theme : Theme,
    changeTheme : () => void,
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider ({ children } : { children : ReactNode}){
    const [theme, setTheme] = useState<Theme>((localStorage.getItem('theme') as Theme) ?? "light");
    
    const changeTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => { // custom hook to make this context usage easier
    const context = useContext(ThemeContext);
    if(!context) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
}