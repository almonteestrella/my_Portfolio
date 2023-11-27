import { darkTheme, lightTheme } from '@/styles/themeConfig';
import React, { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
