import { createContext, useContext } from "react";
import ThemeDataType from "../../integratedDataServer/dataTypes/ThemeDataType";

export type ThemeDataActionType = { type: "setIsLight"; isLight: boolean };

export type ThemeDataContextType = {
    themeData: ThemeDataType;
    themeDataDispatch: React.Dispatch<ThemeDataActionType>;
};

export const ThemeDataContext = createContext<null | ThemeDataContextType>(
    null,
);

const useThemeData = () => {
    return useContext(ThemeDataContext) as ThemeDataContextType;
};

export const ThemeDataReducer = (
    state: ThemeDataType,
    action: ThemeDataActionType,
) => {
    if (action) null;
    return state;
};

export default useThemeData;
