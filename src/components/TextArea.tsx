import { forwardRef } from "react";
import styles from "./TextInputArea.module.sass";

type Props = {
    className?: string;
};

const TextArea = forwardRef(
    (props: Props, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
        return (
            <div className={props.className}>
                <textarea
                    ref={ref}
                    className={`${styles.textInputable} p-1 dark:bg-cblue-900 dark:border-cblue-400 dark:text-white`}
                />
            </div>
        );
    },
);

export default TextArea;
