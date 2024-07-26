import UserDataType from "../../dataTypes/UserDataType";
import { getKeyAsync, setKeyAsync } from "../index";

const userDataKey = "user";

export const getUserDataDirectly = async (): Promise<UserDataType> => {
    const dataRetrieval = await getKeyAsync<UserDataType>(userDataKey);
    if (dataRetrieval !== null) return dataRetrieval;
    return setUserToDefaults();
};

export const updateUserData = async (data: Partial<UserDataType>) => {
    const currData = await getUserDataDirectly();
    const newData = { ...currData, ...data };
    setUserData(newData);
    return newData;
};

const setUserToDefaults = async () => {
    const newData = {
        callStreakLstUpdte: 0,
        callStreakRqrmnt: 20,
        days: [],
        dayStreak: 0,
    };
    await setUserData(newData);
    return newData;
};

export const setUserData = async (data: UserDataType) => {
    await setKeyAsync(userDataKey, data);
    return data;
};
