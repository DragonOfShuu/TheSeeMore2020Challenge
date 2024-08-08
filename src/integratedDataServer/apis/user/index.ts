import {
    getUserDataDirectly,
    getUserDataDirectlyAsync,
    setUserDataAsync,
} from "../../database/userData";
import UserDataType, { CallType } from "../../dataTypes/UserDataType";

export const getUserDataAsync = (): Promise<UserDataType> => {
    return getUserDataDirectlyAsync();
};

export const getUserData = (): UserDataType => {
    return getUserDataDirectly();
};

export const isCallSuccessful = (call: CallType) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { extraInfo, completionDate, ...actuallyImportant } = call;
    return Object.values(actuallyImportant).every((x) => x);
};

const updateCallStreak = (curr: UserDataType): UserDataType => {
    const currDay = curr.days?.[0];

    if (!currDay) return curr;

    let callStreak = 0;
    for (const call of currDay.calls) {
        if (!isCallSuccessful(call)) break;
        callStreak++;
    }
    currDay.callStreak = callStreak;

    return curr;
};

const updateDayClosures = (curr: UserDataType): UserDataType => {
    const days = curr.days;
    if (!days.length) return curr;
    const latestDay = days[0];

    if (Date.now() - latestDay.dayStart > 86400000)
        latestDay.isDayClosed = true;

    if (days?.[1]) days[1].isDayClosed = true;

    return curr;
};

const updateDayStreak = (curr: UserDataType): UserDataType => {
    const days = curr.days;
    let dayStreak = 0;
    for (const day of days) {
        if (!day.isDayClosed) {
            // If it's the current day, let's not count it
            continue;
        }

        if (day.callStreak < curr.callStreakRqrmnt) break;
        // If the call streak requirement was changed
        // sometime after this day, end the streak
        if (day.dayStart < curr.callStreakLstUpdte) break;

        dayStreak++;
    }

    curr.dayStreak = dayStreak;
    return curr;
};

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
 * Get the user data and recalculate it
 * @returns The current, recalculated data
 */
export const getRecalcDataAsync = async () => {
    return recalculateUserData(await getUserDataAsync());
};

/**
 * Recalculates, then sets the new data inputted
 * @param data The new data to set it as
 * @returns The data after recalculation
 */
const recalcAndSetDataAsync = async (data: UserDataType) => {
    return setUserDataAsync(recalculateUserData(data));
};

/**
 * Adds a call to the current open day. If
 * there is no open day, we will return null.
 * @param call The call to add to the current day
 */
export const addCall = async (call: CallType): Promise<UserDataType | null> => {
    const x = await getRecalcDataAsync();
    const days = x.days;
    if (days[0].isDayClosed === true) return null;
    days[0].calls.unshift(call);
    return recalcAndSetDataAsync(x);
};

export const closeDay = async (
    encourWord: string,
    endOfShiftWin: string,
): Promise<UserDataType | null> => {
    const x = await getRecalcDataAsync();
    const day = x.days[0];
    if (day.isDayClosed) return null;
    day.encourWord = encourWord;
    day.endOfShiftWin = endOfShiftWin;
    day.dayEnd = Date.now();
    day.isDayClosed = true;
    return recalcAndSetDataAsync(x);
};

export const startDay = async (): Promise<UserDataType> => {
    const x = await getRecalcDataAsync();
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
    return recalcAndSetDataAsync(x);
};
