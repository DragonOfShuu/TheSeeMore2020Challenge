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
                <div className={`mt-14 px-2 py-4 size-full`}>
                    {/* <HomeScreen /> */}
                    <PageSwitcher />
                </div>
            </div>
        </>
    );
}

export default App;
