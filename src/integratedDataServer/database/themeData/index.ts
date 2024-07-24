import ThemeDataType from "../../dataTypes/ThemeDataType";
import { getKey, setKey } from "../index";

const themeDataKey = "theme";

export const getThemeData = (): ThemeDataType => {
    const dataRetrieval = getKey<ThemeDataType>(themeDataKey);
    if (dataRetrieval !== null) return dataRetrieval;
    return setThemeToDefaults();
};

export const updateThemeData = (data: Partial<ThemeDataType>) => {
    const currData = getThemeData();
    const newData = { ...currData, ...data };
    setThemeData(newData);
    return newData;
};

const setThemeToDefaults = (): ThemeDataType => {
    const newData: ThemeDataType = {
        isLight: true,
    };
    setThemeData(newData);
    return newData;
};

export const setThemeData = (data: ThemeDataType) => {
    setKey(themeDataKey, data);
    return data;
};
