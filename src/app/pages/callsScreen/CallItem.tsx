import { CallType } from "../../../integratedDataServer/dataTypes/UserDataType";

type Props = {
    call: CallType;
};

const CallItem = (props: Props) => {
    return (
        <div
            className={`w-full rounded-md overflow-ellipsis whitespace-nowrap`}
        >
            {JSON.stringify(props.call)}
        </div>
    );
};

export default CallItem;
