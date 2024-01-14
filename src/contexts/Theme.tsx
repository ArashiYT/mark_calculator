import { useState, createContext, useEffect } from "react";

export type TThemeContext = { switchTheme: () => void, theme: TThemeMode }
export type TThemeMode = "dark" | "light"

export const ThemeContext = createContext({} as TThemeContext)
export const DEFAULT_THEME: TThemeMode = "dark"

export default function ThemeProvider({ children } : TChildren) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") as TThemeMode || DEFAULT_THEME)
    const switchTheme = () => setTheme(theme == "light" ? "dark" : "light")
    
    useEffect(() => {
        localStorage.setItem("theme", theme)
        document.body.className = theme
    }, [theme])

    return (
        <ThemeContext.Provider value={{ switchTheme, theme }}>
            { children }
        </ThemeContext.Provider>
    )
}