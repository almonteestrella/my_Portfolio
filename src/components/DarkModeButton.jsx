import { ThemeContext } from './ThemeProvider';
import React, { useContext } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';

const DarkModeButton = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    return (
        <button onClick={toggleTheme} className='dark-mode'>
            {isDarkMode ? <BsMoonFill /> : <BsFillSunFill />}
        </button>
    );
};

export default DarkModeButton;
