import style from './Checkbox.module.sass'
import CheckIcon from './svgs/CheckIcon';

type Props = {
    text?: string;
} & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

const Checkbox = (props: Props) => {
    const { text, className, ...checkBoxProps } = props;

    return (
        <div className={className}>
            <label className={`size-full flex flex-row gap-3 select-none cursor-pointer`}>
                <div className={`grid size-5`}>
                    <input {...checkBoxProps} type={`checkbox`} className={`${style.input} peer 
                    bg-cblue-300 
                    dark:bg-cblue-800 
                    hover:bg-cblue-200 
                    dark:hover:bg-cblue-700
                    checked:bg-cblue-500 
                    dark:checked:bg-cblue-300 
                    checked:hover:bg-cblue-400 
                    dark:checked:hover:bg-cblue-200`} />
                    <CheckIcon className={`size-full object-contain col-start-1 row-start-1 dark:stroke-black hidden peer-checked:block`} />
                </div>
                {text}
            </label>
        </div>
    );
};

export default Checkbox;
