import "./App.sass";
import MyCallBox from "./dataBoxes/MyCallBox";
import MyDayBox from "./dataBoxes/MyDayBox";
import NavBar from "./NavBar";
import StreakCounter from "./StreakCounter";

function App() {
    return (
        <>
            <NavBar />
            <div className={`w-full min-h-screen flex flex-col`}>
                <div className={`mt-14 px-2 flex-grow w-full flex flex-col`}>
                    <div className={`flex flex-col place-content-center place-items-center flex-grow w-full`}>
                        <div className={`size-full flex flex-col lg:flex-row-reverse lg:justify-center items-stretch gap-6 lg:gap-2`}>
                            <div className={`flex flex-col place-content-center place-items-center min-w-96`}>
                                <StreakCounter />
                            </div>
                            <div className={`flex flex-col items-stretch gap-4 w-full lg:w-1/2`}>
                                <MyDayBox />
                                <MyCallBox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
