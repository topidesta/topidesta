import React from "react";
import { useTheme } from "../../utils/ThemeContext";
import "./DarkModeToggle.scss";

const DarkModeToggle = () => {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <button
            className="dark-mode-toggle"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={darkMode ? "Light Mode" : "Dark Mode"}
        >
            <span className="toggle-track">
                <span className="toggle-icon toggle-icon--sun">☀️</span>
                <span className="toggle-icon toggle-icon--moon">🌙</span>
                <span className={`toggle-thumb${darkMode ? " toggle-thumb--dark" : ""}`} />
            </span>
        </button>
    );
};

export default DarkModeToggle;
