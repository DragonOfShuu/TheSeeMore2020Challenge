import { getThemeData, updateThemeData } from "../../database/themeData";

const getIsLightMode = (): boolean => {
    const data = getThemeData();
    return data.isLight;
};

export const setIsLightMode = (isLight: boolean) => {
    return updateThemeData({ isLight });
};

export default getIsLightMode;
