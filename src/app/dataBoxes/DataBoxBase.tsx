import { ReactNode } from "react";

type Props = {
    className?: string;
    name: string;
    children?: ReactNode;
    error?: string;
};

const DataBoxBase = (props: Props) => {
    return (
        <div className={props.className}>
            <div
                className={`flex flex-col items-stretch p-5 gap-2 rounded-3xl text-white bg-cblue-300/70 dark:bg-cblue-950`}
            >
                <h1 className={`text-5xl`}>{props.name}</h1>
                <div className={`flex-grow`}>{props.children}</div>
                {!props.error ? (
                    <></>
                ) : (
                    <div
                        className={`p-3 bg-red-500 border-red-800 border-2 rounded-md`}
                    >
                        {props.error}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DataBoxBase;
