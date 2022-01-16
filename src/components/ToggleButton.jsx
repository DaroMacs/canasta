import React, { useContext } from 'react'
import { ToggleCardsTableContext } from '../contexts/ToggleCardsTableContext'

const ToggleButton = () => {

    const {toggleMode, setToggleMode} = useContext(ToggleCardsTableContext)

    const toggleHandler = () => {

        setToggleMode(!toggleMode)
    }

    return (
        <>
            <button
                className='btn btn-primary mt-3'
                onClick={toggleHandler}
            >
            Change view
            </button>
        </>
    )
}

export default ToggleButton
