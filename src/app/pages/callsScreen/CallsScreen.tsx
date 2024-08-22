import { useMemo, useState } from "react";
import useUserData from "../../../contexts/user/UserDataContext";
import CallItem from "./CallItem";
import { DayType } from "../../../integratedDataServer/dataTypes/UserDataType";
import SetDay from "./SetDay";

const CallsScreen = () => {
    const { userData } = useUserData();
    const [dayToView, setDayToView] = useState(0);

    const dayValue: DayType|undefined = useMemo(
        () => userData.days?.[dayToView],
        [dayToView, userData.days],
    );

    if (dayValue===undefined) 
        return <div className={`size-full flex items-center justify-center text-cblue-300 dark:text-cblue-950 text-7xl md:text-9xl font-extrabold font-mono opacity-50`}>NO CALLS</div>


    console.log("Cur day calls: ", dayValue.calls);

    return (
        <div className="size-full xl:px-20 pt-8 flex flex-col gap-5"
        >
            <div className={`self-center font-mono`}>
                <SetDay dayInd={dayToView} setDayInd={setDayToView} />
            </div>
            <div className={`grid gap-y-2`}>
                {dayValue.calls.map((c) => (
                    <CallItem call={c} key={c.completionDate} />
                ))}
            </div>
        </div>
    );
};

export default CallsScreen;
