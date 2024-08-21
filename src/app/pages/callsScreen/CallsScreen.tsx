import { useMemo, useState } from "react";
import useUserData from "../../../contexts/user/UserDataContext";
import CallItem from "./CallItem";

const CallsScreen = () => {
    const { userData } = useUserData();
    const [dayToView, setDayToView] = useState(0);

    const dayValue = useMemo(
        () => userData.days[dayToView],
        [dayToView, userData.days],
    );

    console.log("Cur day calls: ", dayValue.calls);

    return (
        <div className="size-full flex flex-col gap-2 items-center">
            {dayValue.calls.map((c) => (
                <CallItem call={c} key={c.completionDate} />
            ))}
        </div>
    );
};

export default CallsScreen;
