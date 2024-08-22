import { useMemo } from "react";
import { extractCallCompletion } from "../../../integratedDataServer/apis/user";
import { CallType } from "../../../integratedDataServer/dataTypes/UserDataType";

type Props = {
    call: CallType;
};

const CallItem = (props: Props) => {

    const callCompletion = useMemo(()=> extractCallCompletion(props.call), [props.call])
    const completedSteps = useMemo(()=> Object.values(callCompletion).reduce((p, c) => p+(c?1:0), 0), [callCompletion])

    const dateCompleted = useMemo(()=> {
        const d = new Date(0)
        d.setUTCMilliseconds(props.call.completionDate)
        return d;
    }, [props.call.completionDate])

    const style = `rounded-md bg-cblue-200 dark:bg-cblue-950 border-2 h-24 dark:border-cblue-400 p-4`

    return (
        <div
            className={`${style} grid grid-flow-col grid-cols-subgrid gap-x-5`}
            style={{gridColumn: '1 / 4', gridTemplateRows: 'auto auto'}}
        >
            <h3>Completion</h3>
            {`${completedSteps} / ${Object.keys(callCompletion).length}`}
            <h3>Time</h3>
            {`${dateCompleted.toLocaleTimeString()} [${dateCompleted.toLocaleDateString()}]`}
            <h3>Extra Info</h3>
            {props.call.extraInfo===''?'[blank]':props.call.extraInfo}
        </div>
    );
};

export default CallItem;
