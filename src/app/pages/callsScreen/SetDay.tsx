import { useMemo } from "react";
import useUserData from "../../../contexts/user/UserDataContext"

type Props = {
    dayInd: number,
    setDayInd: (x: number) => unknown
}

const SetDay = ({dayInd, setDayInd}: Props) => {
    const {userData} = useUserData();

    const day = useMemo(() => userData.days?.[dayInd], [dayInd, userData.days])
    const dateCompleted = useMemo(()=> {
        const d = new Date(0)
        d.setUTCMilliseconds(day.dayStart)
        return d;
    }, [day.dayStart])

    const shiftDay = (offset: number) => {
        const newValue = offset+dayInd;
        setDayInd( Math.min(userData.days.length-1, Math.max(0, newValue)) )
    }

    return (
        <div className="flex gap-2 text-6xl">
            <button onClick={()=> shiftDay(1)}>
                &lt;
            </button>
            <div className={`rounded-md bg-cblue-100 dark:bg-cblue-950 dark:bg-opacity-40 py-4 px-6`}>
                {dateCompleted.toLocaleDateString()}
            </div>
            <button onClick={()=> shiftDay(-1)}>
                &gt;
            </button>
        </div>
    )
}

export default SetDay;