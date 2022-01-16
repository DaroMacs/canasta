import React, { useContext } from 'react'
import { DarkThemeContext } from '../contexts/DarkThemeContext'

const DarkModeButton = () => {

    const {darkMode, setDarkMode} = useContext(DarkThemeContext)

    const themeHandler = () => {
        setDarkMode(!darkMode)
    }

    return (
        <button 
            className={darkMode ? 'btn btn-dark fa fa-toggle-on' : 'btn btn-dark fa fa-toggle-off'}
            onClick={themeHandler}
        >
        </button>
    )
}

export default DarkModeButton
