import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import TextInput from "../../components/TextInput";
import DataBoxBase from "./DataBoxBase";

type Props = {
    className?: string;
};

const MyDayBox = (props: Props) => {
    return (
        <div className={props.className}>
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
        </div>
    );
};

export default MyDayBox;
