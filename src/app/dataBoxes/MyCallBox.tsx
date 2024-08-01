import useUserData from "../../contexts/user/UserDataContext";
import DataBoxBase from "./DataBoxBase";

type Props = {
    className?: string;
};

const MyCallBox = (props: Props) => {
    const { userData } = useUserData();

    // if (!userData.days.length || userData.days[0].isDayClosed)
    //     return null;

    return (
        <div className={props.className}>
            <DataBoxBase name={`My Call`}></DataBoxBase>
        </div>
    );
};

export default MyCallBox;
