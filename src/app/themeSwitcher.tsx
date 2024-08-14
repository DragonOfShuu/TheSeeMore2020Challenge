import MoonLineIcon from "../components/svgs/MoonLineIcon";
import SunLineIcon from "../components/svgs/SunLineIcon";
import useThemeData from "../contexts/theme/ThemeDataContext";
import styles from './../components/svgs/LineArtIcons.module.sass'

type Props = {
    className?: string;
};

const ThemeSwitcher = (props: Props) => {
    const { themeData, themeDataDispatch } = useThemeData();

    const handleClick = () => {
        themeDataDispatch({ type: "setIsLight", isLight: !themeData.isLight });
    };

    return (
        <button onClick={handleClick} className={`${props.className} ${styles.lineArtIcon}`}>
            {
                themeData.isLight?
                    <SunLineIcon className={`w-auto h-full`} />
                :
                    <MoonLineIcon className={`w-auto h-full`} />
            }
        </button>
    );
};

export default ThemeSwitcher;
