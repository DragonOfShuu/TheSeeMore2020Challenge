import { createContext, useContext } from "react";
import UserDataType, { CallType } from "../../integratedDataServer/dataTypes/UserDataType";

export type UserDataContextType = {
    userData: UserDataType,
    userDataDispatch: (action: UserDataActionType) => Promise<UserDataType>
}

export type UserDataActionType = 
    | { type: 'addCall', call: CallType }

export const UserDataContext = createContext<null|UserDataContextType>(null)

const useUserData = () => {
    return useContext(UserDataContext) as UserDataContextType;
}

export default useUserData;
