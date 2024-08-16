import { useState, useEffect } from "react";
import useUserData from "../../contexts/user/UserDataContext";
import { DayType } from "../../integratedDataServer/dataTypes/UserDataType";

const useCurrentDay = (): DayType | null => {
    const { userData } = useUserData();
    const [currDay, setCurrDay] = useState<null | DayType>(null);

    useEffect(() => {
        if (userData.days.length && !userData.days[0].isDayClosed) {
            setCurrDay(userData.days[0]);
        } else {
            setCurrDay(null);
        }
    }, [userData]);

    return currDay;
};

export default useCurrentDay;
