import "./App.sass";
// import HomeScreen from "./pages/homeScreen/HomeScreen";
import NavBar from "./NavBar";
import PageSwitcher from "./PageSwitcher";

function App() {
    return (
        <>
            <NavBar />
            {/* Covers the screen height */}
            <div className={`w-full min-h-screen h-screen flex flex-col`}>
                {/* Excludes the nav bar, and adds margins */}
                <div className={`pt-14 pb-12 px-2 size-full`}>
                    {/* <HomeScreen /> */}
                    <PageSwitcher />
                </div>
            </div>
        </>
    );
}

export default App;
