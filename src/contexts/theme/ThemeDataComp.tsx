import { ReactNode, useEffect, useReducer } from "react";
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

    useEffect(() => {
        const x = document.getElementsByTagName("html");
        if (!x.length) return;
        x[0].classList.remove("dark");
        if (themeData.isLight) return;
        x[0].classList.add("dark");
    }, [themeData.isLight]);

    return (
        <ThemeDataContext.Provider value={{ themeData, themeDataDispatch }}>
            {props.children}
        </ThemeDataContext.Provider>
    );
};

export default ThemeDataComp;
