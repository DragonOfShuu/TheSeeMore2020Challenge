import { getUserDataDirectly, setUserData } from "../../database/userData";
import UserDataType, { CallType } from "../../dataTypes/UserDataType";

export const getUserData = (): UserDataType => {
    return getUserDataDirectly();
};

export const getUserDataAsync = (): Promise<UserDataType> => {
    return new Promise((resolve) => {
        const data = getUserDataDirectly();
        resolve(data);
    });
};

export const isCallSuccessful = (call: CallType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {extraInfo, completionDate, ...actuallyImportant} = call;
    return Object.values(actuallyImportant).every((x)=> x);
}

const updateUserData = (data: Partial<UserDataType>) => {
    const x = { ...getUserData(), ...data };
    setUserData(x);
};

const updateCallStreak = (curr: UserDataType): UserDataType => {
    const currDay = curr.days?.[0];

    let callStreak = 0;
    for (const call of currDay.calls) {
        if (!isCallSuccessful(call)) 
            break;
        callStreak++;
    }
    currDay.callStreak = callStreak;

    return curr;
}

const updateDayClosures = (curr: UserDataType): UserDataType => {
    const days = curr.days
    if (!days.length) return curr;
    const latestDay = days[0];

    if (Date.now() - latestDay.dayStart > 86400000)
        latestDay.isDayClosed = true;

    if (days?.[1]) days[1].isDayClosed = true;
    
    return curr;
}

const updateDayStreak = (curr: UserDataType): UserDataType => {
    const days = curr.days;
    for (const day of days) {
        
    }
}

const recalculateUserData = (curr: UserDataType): UserDataType => {
    const newUserData = JSON.parse(JSON.stringify(curr));
    // Update call streak
    updateCallStreak(newUserData);
    // If the day was started 24hrs ago, close the day
    updateDayClosures(newUserData);
    // Update day streak based on call streaks
    updateDayStreak(newUserData);

    return newUserData;
};

/**
 * Adds a call to the current open day. If
 * there is no open day, we will return null.
 * @param call The call to add to the current day
 */
export const addCall = (call: CallType): UserDataType | null => {
    const x = getUserData();
    const days = x.days;
    if (days[0].isDayClosed === true) return null;
    days[0].calls.unshift(call);
    setUserData(recalculateUserData(x));
    return x;
};

export const closeDay = (
    encourWord: string,
    endOfShiftWin: string,
): UserDataType | null => {
    const x = getUserData();
    const day = x.days[0];
    if (day.isDayClosed) return null;
    day.encourWord = encourWord;
    day.endOfShiftWin = endOfShiftWin;
    day.dayEnd = Date.now();
    day.isDayClosed = true;
    setUserData(x);
    return x;
};

export const startDay = (): UserDataType => {
    const x = getUserData();
    const days = x.days;
    if (days[0]) days[0].isDayClosed = true;
    days.unshift({
        calls: [],
        callStreak: 0,
        dayStart: Date.now(),
        dayEnd: null,
        encourWord: "",
        endOfShiftWin: "",
        isDayClosed: false,
    });
    setUserData(x);
    return x;
};
