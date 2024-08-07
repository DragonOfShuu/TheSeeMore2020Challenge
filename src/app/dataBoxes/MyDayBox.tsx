import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import TextInput from "../../components/TextInput";
import useUserData from "../../contexts/user/UserDataContext";
import DataBoxBase from "./DataBoxBase";

type Props = {
    className?: string;
};

const MyDayBox = (props: Props) => {
    const {userData, userDataDispatch} = useUserData();

    const currDayOpen = userData.days.length && !userData.days[0].isDayClosed;

    const startDay = () => {
        userDataDispatch({type: 'startDay'})
    }

    return (
        <div className={props.className}>
            {
                currDayOpen?
                    <DataBoxBase name={`My Day`}>
                        <div className={`grid gap-4 md:grid-flow-col`}>
                            <div className={`flex flex-col items-stretch gap-1`}>
                                <p>My Encouraging Word</p>
                                <TextInput className={`w-full`} />
                                <p>My End of Shift Win</p>
                                <TextArea className={`w-full`} />
                            </div>
                            <div
                                className={`flex flex-col-reverse gap-3 items-stretch`}
                            >
                                <Button notProminent={true}>{`Skip Today`}</Button>
                                <Button>{`Finish My Day`}</Button>
                            </div>
                        </div>
                    </DataBoxBase>
                :
                    <div className={`flex flex-col items-center place-content-center`}>
                        <Button onClick={startDay}>
                            {`Start Day`}
                        </Button>
                    </div>
            }
        </div>
    );
};

export default MyDayBox;
