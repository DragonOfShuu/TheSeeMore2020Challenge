import { ReactNode } from "react";

type Props = {
    className?: string;
    name: string;
    children?: ReactNode;
};

const DataBoxBase = (props: Props) => {
    return (
        <div className={props.className}>
            <div
                className={`flex flex-col items-stretch p-3 rounded-3xl text-white bg-cblue-300 dark:bg-cblue-900`}
            >
                <h1 className={`text-5xl`}>{props.name}</h1>
                <div className={`flex-grow`}>{props.children}</div>
            </div>
        </div>
    );
};

export default DataBoxBase;
