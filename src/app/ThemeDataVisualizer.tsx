import useThemeData from "../contexts/theme/ThemeDataContext";

const ThemeDataVisualizer = () => {
    const { themeData } = useThemeData();

    return (
        <div
            className={`text-white bg-cblue-500 flex flex-col gap-4 text-left dark:rounded-xl`}
        >
            <pre>{themeData.toString()}</pre>
            <pre className={`wrap`}>
                {JSON.stringify(themeData, undefined, 4)}
            </pre>
        </div>
    );
};

export default ThemeDataVisualizer;
