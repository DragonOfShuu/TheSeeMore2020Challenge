import Button from "../components/Button";
import useThemeData from "../contexts/theme/ThemeDataContext";

type Props = {
    className?: string;
};

const ThemeSwitcher = (props: Props) => {
    const { themeData, themeDataDispatch } = useThemeData();

    const handleClick = () => {
        themeDataDispatch({ type: "setIsLight", isLight: !themeData.isLight });
    };

    return (
        <div className={props.className}>
            <Button onClick={handleClick}>Theme</Button>
        </div>
    );
};

export default ThemeSwitcher;
