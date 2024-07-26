import UserDataType from "../../dataTypes/UserDataType";
import { getKey, setKey } from "../index";

const userDataKey = "user";

export const getUserDataDirectly = (): UserDataType => {
    const dataRetrieval = getKey<UserDataType>(userDataKey);
    if (dataRetrieval !== null) return dataRetrieval;
    return setUserToDefaults();
};

export const updateUserData = (data: Partial<UserDataType>) => {
    const currData = getUserDataDirectly();
    const newData = { ...currData, ...data };
    setUserData(newData);
    return newData;
};

const setUserToDefaults = () => {
    const newData = {
        callStreakLstUpdte: 0,
        callStreakRqrmnt: 20,
        days: [],
        dayStreak: 0,
    };
    setUserData(newData);
    return newData;
};

export const setUserData = (data: UserDataType) => {
    setKey(userDataKey, data);
    return data;
};
