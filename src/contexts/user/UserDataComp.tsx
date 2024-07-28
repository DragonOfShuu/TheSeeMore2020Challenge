import { ReactNode, useCallback, useState } from "react";
import { UserDataActionType, UserDataContext } from "./UserDataContext";
import {
    addCall,
    getUserDataAsync,
} from "../../integratedDataServer/apis/user";

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
            switch (action.type) {
                case "addCall": {
                    const newUserData = await addCall(action.call);
                    if (!newUserData) return userData;
                    setUserData(newUserData);
                    return newUserData;
                }
            }
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
