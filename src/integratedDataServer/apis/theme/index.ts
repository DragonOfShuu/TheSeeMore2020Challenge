import { getThemeData, updateThemeData } from "../../database/themeData";
import ThemeDataType from "../../dataTypes/ThemeDataType";

const getIsLightMode = (): boolean => {
    const data = getThemeData();
    return data.isLight;
};

export const setIsLightMode = (isLight: boolean): ThemeDataType => {
    return updateThemeData({ isLight });
};

export default getIsLightMode;
