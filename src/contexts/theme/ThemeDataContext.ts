import { createContext, useContext } from "react";
import ThemeDataType from "../../integratedDataServer/dataTypes/ThemeDataType";
import { setIsLightMode } from "../../integratedDataServer/apis/theme";

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
    prevState: ThemeDataType,
    action: ThemeDataActionType,
) => {
    switch (action.type) {
        case "setIsLight": {
            const newState = setIsLightMode(action.isLight);
            if (JSON.stringify(prevState) === JSON.stringify(newState))
                return prevState;
            return newState;
        }
    }
};

export default useThemeData;
