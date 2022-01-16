import React, { useContext } from 'react'
import DarkModeButton from './DarkModeButton'
import { DarkThemeContext } from '../contexts/DarkThemeContext'

const NavBar = ({user, logOut}) => {

    const {darkMode} = useContext(DarkThemeContext)

    return (
        <>
            <nav className={darkMode ? "navbar navbar-expand-lg bg-secondary text-white" : "navbar navbar-expand-lg border bg-white"}>
                <div className="container-fluid">
                    <h4 className='m-2'>Welcome {user.name}</h4>
                    <button onClick={logOut} className={darkMode ? "btn btn-dark text-white fw-bold" : "btn btn-warning text-dark fw-bold"}>Log Out</button>           

                </div>
                    <div className="justify-content-end">
                    <DarkModeButton /> 
                    </div>
            </nav>
        </>
    )
}

export default NavBar
