export type CallType = {
    verifiedPrescription: boolean;
    guarantee: boolean;
    valueAddedOffer: boolean;
    subscription: boolean;
    verifiedECPDialog: boolean;
    postedSalesInChat: boolean;
    extraInfo: string;
    completionDate: number;
    version?: "v1";
};

export type DayType = {
    calls: CallType[];
    callStreak: number;
    encourWord: string;
    endOfShiftWin: string;
    dayStart: number;
    dayEnd: number | null;
    isDayClosed: boolean;
    version?: "v1";
};

type UserDataType = {
    days: DayType[];
    dayStreak: number;
    callStreakRqrmnt: number;
    callStreakLstUpdte: number; // An epoch date
    version?: "v1";
};

export default UserDataType;
