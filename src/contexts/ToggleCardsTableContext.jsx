import React, { createContext, useState } from 'react'

export const ToggleCardsTableContext = createContext()

export const ToggleCardsTableContextProvider = ({children}) => {

    const [toggleMode, setToggleMode] = useState(false)

    return <ToggleCardsTableContext.Provider
        value ={{toggleMode, setToggleMode}}
    >
        {children}
    </ToggleCardsTableContext.Provider>
}
