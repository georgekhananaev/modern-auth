"use client";

import {createContext, useEffect, useState} from "react";
import type {Theme, ThemeContextProps, ThemeProviderProps} from "./types";

// Create the theme context with default values
const ThemeContext = createContext<ThemeContextProps>({
    theme: "system",
    setTheme: () => {
    },
    isDarkMode: false,
    toggleTheme: () => {
    },
});

// Theme provider component
export function ThemeProvider({
                                  children,
                                  defaultTheme = "system",
                              }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [mounted, setMounted] = useState(false);

    // Toggle between light and dark themes
    const toggleTheme = () => {
        setTheme(isDarkMode ? "light" : "dark");
    };

    // Initialize theme on first render
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") as Theme | null;
        if (storedTheme && ["light", "dark", "system"].includes(storedTheme)) {
            setTheme(storedTheme);
        }
        setMounted(true);
    }, []);

    // Determine if dark mode is active based on theme setting and system preference
    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;
        const systemIsDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        let isDark = false;

        if (theme === "system") {
            isDark = systemIsDark;
        } else {
            isDark = theme === "dark";
        }

        // Apply dark class for Tailwind dark mode
        if (isDark) {
            root.classList.add("dark");
            root.classList.remove("light");
            root.style.setProperty('--color-scheme', 'dark');
        } else {
            root.classList.remove("dark");
            root.classList.add("light");
            root.style.setProperty('--color-scheme', 'light');
        }

        setIsDarkMode(isDark);
        localStorage.setItem("theme", theme);
    }, [theme, mounted]);

    // Listen for system color scheme changes
    useEffect(() => {
        if (!mounted) return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = () => {
            if (theme === "system") {
                const newIsDark = mediaQuery.matches;
                setIsDarkMode(newIsDark);

                // Apply dark or light class when system preference changes
                if (newIsDark) {
                    document.documentElement.classList.add("dark");
                    document.documentElement.classList.remove("light");
                    document.documentElement.style.setProperty('--color-scheme', 'dark');
                } else {
                    document.documentElement.classList.remove("dark");
                    document.documentElement.classList.add("light");
                    document.documentElement.style.setProperty('--color-scheme', 'light');
                }
            }
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [theme, mounted]);

    // Create context value
    const value = {
        theme,
        setTheme,
        isDarkMode,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

// Export ThemeContext
export {ThemeContext};