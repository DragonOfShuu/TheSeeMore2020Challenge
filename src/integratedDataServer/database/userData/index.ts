import UserDataType from "../../dataTypes/UserDataType";
import { getKey, getKeyAsync, setKeyAsync } from "../index";

const userDataKey = "user";

export const getUserDataDirectlyAsync = async (): Promise<UserDataType> => {
    const dataRetrieval = await getKeyAsync<UserDataType>(userDataKey);
    if (dataRetrieval !== null) return dataRetrieval;
    return setUserToDefaultsAsync();
};

export const getUserDataDirectly = (): UserDataType => {
    const dataRetrieval = getKey<UserDataType>(userDataKey);
    if (dataRetrieval !== null) return dataRetrieval;
    return setUserToDefaults();
};

export const updateUserData = async (data: Partial<UserDataType>) => {
    const currData = await getUserDataDirectlyAsync();
    const newData = { ...currData, ...data };
    setUserDataAsync(newData);
    return newData;
};

const setUserToDefaultsAsync = async () => {
    const newData = {
        callStreakLstUpdte: 0,
        callStreakRqrmnt: 20,
        days: [],
        dayStreak: 0,
    };
    await setUserDataAsync(newData);
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

export const setUserDataAsync = async (data: UserDataType) => {
    await setKeyAsync(userDataKey, data);
    return data;
};

export const setUserData = async (data: UserDataType) => {
    await setKeyAsync(userDataKey, data);
    return data;
};
