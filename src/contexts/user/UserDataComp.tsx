import { ReactNode, useCallback, useState } from "react";
import {
    UserDataActionType,
    UserDataContext,
    userDataReducerAsync,
} from "./UserDataContext";
import { getUserDataAsync } from "../../integratedDataServer/apis/user";

type Props = {
    children: ReactNode;
};

/**
 * Component that provides the user data.
 * !!! MUST BE LAZY LOADED !!!
 */
const UserDataComp = async (props: Props) => {
    const [userData, setUserData] = useState(await getUserDataAsync());

    const userDataDispatch = useCallback(
        async (action: UserDataActionType) => {
            const newValue = await userDataReducerAsync(userData, action);
            if (newValue === userData) return userData;
            setUserData(newValue);
            return newValue;
        },
        [userData],
    );

    return (
        <UserDataContext.Provider value={{ userData, userDataDispatch }}>
            {props.children}
        </UserDataContext.Provider>
    );
};

export default UserDataComp;
