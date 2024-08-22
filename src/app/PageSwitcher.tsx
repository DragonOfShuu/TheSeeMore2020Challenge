import usePageContext, {
    ALL_PAGES,
    PageType,
} from "../contexts/page/PageDataContext";
import CallsScreen from "./pages/callsScreen/CallsScreen";
import HomeScreen from "./pages/homeScreen/HomeScreen";


const PageSwitcher = () => {
    const { page, setPage } = usePageContext();

    const pagesToView = [<HomeScreen />, <CallsScreen />];

    return (
        <div className={`size-full overflow-hidden`}>
            {/** This is the page conveyor */}
            <div
                className={`h-full transition-transform flex items-stretch`}
                style={{
                    width: `${ALL_PAGES.length}00%`,
                    transform: `translateX(-${(ALL_PAGES.indexOf(page) / ALL_PAGES.length)*100}%)`,
                    transformBox: `border-box`
                }}
            >
                {pagesToView.map((ptv) => (
                    <>
                        <div style={{ width: `${(1 / ALL_PAGES.length) * 100}%` }} className={`overflow-y-scroll h-full max-h-full pr-0`}>
                            {ptv}
                        </div>
                    </>
                ))}
            </div>
            <div
                className={`fixed bottom-0 left-0 right-0`}
            >
                <div className={`flex flex-row items-center mx-auto w-fit dark:bg-cblue-950 bg-cblue-300 text-white rounded-t-md overflow-hidden`}>
                    {ALL_PAGES.map((p) => (
                        <button
                            className={`p-3 ${p === page ? "bg-cblue-900" : ""} capitalize`}
                            onClick={() => setPage(p as PageType)}
                        >
                            {p}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageSwitcher;
