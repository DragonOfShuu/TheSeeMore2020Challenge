import MoonLineIcon from "../components/svgs/MoonLineIcon";
import SunLineIcon from "../components/svgs/SunLineIcon";
import useThemeData from "../contexts/theme/ThemeDataContext";
import lineartstyles from "./../components/svgs/LineArtIcons.module.sass";
import styles from "./ThemeSwitcher.module.sass";

type Props = {
    className?: string;
};

const ThemeSwitcher = (props: Props) => {
    const { themeData, themeDataDispatch } = useThemeData();

    const handleClick = () => {
        themeDataDispatch({ type: "setIsLight", isLight: !themeData.isLight });
    };

    return (
        <button
            onClick={handleClick}
            className={`${props.className} ${lineartstyles.lineArtIcon} ${styles.icon}`}
        >
            {themeData.isLight ? (
                <SunLineIcon className={`w-auto h-full`} />
            ) : (
                <MoonLineIcon className={`w-auto h-full`} />
            )}
        </button>
    );
};

export default ThemeSwitcher;
