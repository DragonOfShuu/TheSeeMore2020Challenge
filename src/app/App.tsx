import "./App.sass";
import HomeScreen from "./HomeScreen";
import NavBar from "./NavBar";

function App() {
    return (
        <>
            <NavBar />
            {/* Covers the screen height */}
            <div className={`w-full min-h-screen flex flex-col`}>
                {/* Excludes the nav bar, and adds margins */}
                <div
                    className={`mt-14 px-2 py-4 flex-grow w-full flex flex-col`}
                >
                    {/* Places the content in the center of the screen */}
                    <div
                        className={`flex flex-col place-content-center flex-grow w-full xl:px-64`}
                    >
                        <HomeScreen />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
