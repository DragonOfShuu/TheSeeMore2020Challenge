type Props = {
    text?: string;
} & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

const Checkbox = (props: Props) => {
    const { text, ...checkBoxProps } = props;

    return (
        <div className={props.className}>
            <div className={`size-full flex flex-row gap-3`}>
                <input {...checkBoxProps} type={`checkbox`} />
                {text}
            </div>
        </div>
    );
};

export default Checkbox;
