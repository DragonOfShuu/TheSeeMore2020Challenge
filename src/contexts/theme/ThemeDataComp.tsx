import { ReactNode, useReducer } from "react";
import { ThemeDataContext, ThemeDataReducer } from "./ThemeDataContext";
import { getThemeData } from "../../integratedDataServer/database/themeData";

type Props = {
    children: ReactNode;
};

const ThemeDataComp = (props: Props) => {
    const [themeData, themeDataDispatch] = useReducer(
        ThemeDataReducer,
        getThemeData(),
    );

    return (
        <ThemeDataContext.Provider value={{ themeData, themeDataDispatch }}>
            <div data-mode={`${themeData.isLight ? "light" : "dark"}`}>
                {props.children}
            </div>
        </ThemeDataContext.Provider>
    );
};

export default ThemeDataComp;
