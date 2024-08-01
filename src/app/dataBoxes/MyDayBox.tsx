import DataBoxBase from "./DataBoxBase";

type Props = {
    className?: string;
};

const MyDayBox = (props: Props) => {
    return (
        <div className={props.className}>
            <DataBoxBase name={`My Day`}></DataBoxBase>
        </div>
    );
};

export default MyDayBox;
