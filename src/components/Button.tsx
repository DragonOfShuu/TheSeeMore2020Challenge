import styles from "./Button.module.sass";

type Props = {
    notProminent?: boolean;
} & React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

const Button = (props: Props) => {
    const { className, style, notProminent, ...buttonProps } = props;

    return (
        <div className={className} style={{ display: "inline", ...style }}>
            <button
                {...buttonProps}
                className={`${notProminent ? styles.nonProm : styles.prom} ${styles.button}`}
            />
        </div>
    );
};

export default Button;
