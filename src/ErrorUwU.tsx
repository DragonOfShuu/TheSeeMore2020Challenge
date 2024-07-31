import { FallbackProps } from "react-error-boundary";
import styles from "./ErrorUwU.module.sass";

type ErrorProps = FallbackProps;

const ErrorUwU = (props: ErrorProps) => {
    return (
        <div
            className={`absolute top-0 left-0 size-full bg-cblue-975 text-white ${styles.errorScrollbar}`}
        >
            <div
                className={`size-full flex place-content-center place-items-center`}
            >
                <div
                    className={`flex flex-col gap-5 rounded-xl bg-cblue-900 p-5 max-w-full`}
                >
                    <h1>{`Uh oh, something went wrong!`}</h1>
                    <pre
                        className={`rounded-lg bg-cblue-950 text-left p-4 overflow-auto`}
                    >
                        {`${props.error.stack}`}
                    </pre>
                    <button
                        className={
                            "bg-cblue-500 hover:bg-cblue-400 transition-all p-3 rounded-md"
                        }
                        onClick={props.resetErrorBoundary}
                    >
                        Attempt Reload
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorUwU;
