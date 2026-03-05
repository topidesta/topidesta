import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    // Read saved theme only after mount to avoid hydration mismatch
    useEffect(() => {
        const saved = localStorage.getItem("darkMode");
        if (saved !== null) {
            setDarkMode(JSON.parse(saved));
        } else {
            setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
        setHasMounted(true);
    }, []);

    useEffect(() => {
        if (!hasMounted) return;
        const root = document.documentElement;
        if (darkMode) {
            root.setAttribute("data-theme", "dark");
        } else {
            root.removeAttribute("data-theme");
        }
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }, [darkMode, hasMounted]);

    const toggleTheme = () => setDarkMode((prev) => !prev);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
