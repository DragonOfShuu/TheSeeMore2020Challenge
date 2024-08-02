import { forwardRef } from "react";
import styles from "./TextInputArea.module.sass";

type Props = {
    className?: string;
};

const TextInput = forwardRef(
    (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
        return (
            <div className={props.className}>
                <div className={`h-8`}>
                    <input
                        type={"text"}
                        ref={ref}
                        className={`${styles.textInputable}`}
                    />
                </div>
            </div>
        );
    },
);

export default TextInput;
