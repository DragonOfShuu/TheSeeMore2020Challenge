import Button from "../components/Button"
// import useThemeData from "../contexts/theme/ThemeDataContext"

type Props = {
    className: string
}

const ThemeSwitcher = (props: Props) => {
    // const {themeData, themeDataDispatch} = useThemeData();

    return (
        <div className={props.className}>
            <Button></Button>
        </div>
    )
}

export default ThemeSwitcher;