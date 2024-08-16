import { createContext, useContext } from "react";
import UserDataType, {
    CallType,
} from "../../integratedDataServer/dataTypes/UserDataType";
import {
    addCall,
    closeDay,
    startDay,
} from "../../integratedDataServer/apis/user";

export type UserDataContextType = {
    userData: UserDataType;
    userDataDispatch: (action: UserDataActionType) => Promise<UserDataType>;
};

export type UserDataActionType =
    | { type: "addCall"; call: CallType }
    | { type: "closeDay"; encourWord: string; endOfShiftWin: string }
    | { type: "startDay" };

export const UserDataContext = createContext<null | UserDataContextType>(null);

const useUserData = () => {
    return useContext(UserDataContext) as UserDataContextType;
};

export const userDataReducerAsync = async (
    prevState: UserDataType,
    action: UserDataActionType,
): Promise<UserDataType> => {
    switch (action.type) {
        case "addCall": {
            console.log("Adding call...")
            const newUserData = await addCall(action.call);
            console.log("New userdata after adding call: ", newUserData)
            if (!newUserData) return prevState;
            console.log("Returning new userdata after adding call...")
            return newUserData;
        }
        case "closeDay": {
            const newUserData = await closeDay(
                action.encourWord,
                action.endOfShiftWin,
            );
            if (!newUserData) return prevState;
            return newUserData;
        }
        case "startDay": {
            console.log("Awaiting Start Day");
            const newUserData = await startDay();
            return newUserData;
        }
    }
};

export default useUserData;
