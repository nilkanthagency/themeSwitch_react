import { createContext, useContext } from "react";

export const ToggleContext = createContext({
    defaultTheme: 'light',
    darkTheme: () => { },
    lightTheme: () => { },
}
)

export const ToggleContextProvider = ToggleContext.Provider

export const useTheme = () => {
    return useContext(ToggleContext)
}