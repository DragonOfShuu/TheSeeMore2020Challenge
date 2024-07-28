import { ReactNode, useReducer } from "react"
import { ThemeDataContext, ThemeDataReducer } from "./ThemeDataContext"
import { getThemeData } from "../../integratedDataServer/database/themeData"

type Props = {
    children: ReactNode
}

const ThemeDataComp = async (props: Props) => {
    const [themeData, themeDataDispatch] = useReducer(ThemeDataReducer, getThemeData())
    
    return (
        <ThemeDataContext.Provider value={{themeData, themeDataDispatch}}>
            {props.children}
        </ThemeDataContext.Provider>
    )
}

export default ThemeDataComp;