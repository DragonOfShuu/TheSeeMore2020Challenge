import { ReactNode, useCallback, useState } from "react";
import {
    UserDataActionType,
    UserDataContext,
    userDataReducerAsync,
} from "./UserDataContext";
import { getUserDataAsync } from "../../integratedDataServer/apis/user";
import promiseResolver from "../../libs/promiseResolver";

type Props = {
    children: ReactNode;
};

const data = promiseResolver(getUserDataAsync());

const UserDataRaw = (props: Props) => {
    const [userData, setUserData] = useState(data.read());

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

export default UserDataRaw;
