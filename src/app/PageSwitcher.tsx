import usePageContext, {
    ALL_PAGES,
    PageType,
} from "../contexts/page/PageDataContext";
import CallsScreen from "./pages/callsScreen/CallsScreen";
import HomeScreen from "./pages/homeScreen/HomeScreen";

// type Props = {

// }

const PageSwitcher = () => {
    const { page, setPage } = usePageContext();

    const pagesToView = [<HomeScreen />, <CallsScreen />];

    return (
        <div className={`size-full overflow-x-hidden`}>
            {/** This is the page conveyor */}
            <div
                className={`h-full transition-transform flex items-stretch`}
                style={{
                    width: `${ALL_PAGES.length}00vw`,
                    transform: `translateX(-${ALL_PAGES.indexOf(page)}00vw)`,
                }}
            >
                {pagesToView.map((ptv) => (
                    <div style={{ width: `${(1 / ALL_PAGES.length) * 100}%` }}>
                        {ptv}
                    </div>
                ))}
            </div>
            <div
                className={`fixed bottom-0 rounded-t-md overflow-hidden dark:bg-cblue-950 bg-cblue-300 text-white`}
            >
                <div className={`flex flex-row items-center gap-2`}>
                    {ALL_PAGES.map((p) => (
                        <button
                            className={`p-3 ${p === page ? "bg-cblue-900" : ""}`}
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
