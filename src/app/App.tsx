import ChallengeMark2020 from "../components/svgs/2020ChallengeMark";
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
                    <div className={`flex flex-col place-content-center place-items-center flex-grow w-full lg:px-64`}>
                        <div className={`size-full flex flex-col lg:flex-row-reverse lg:justify-center items-stretch gap-6 lg:gap-2`}>
                            <div className={`flex flex-col justify-around lg:w-1/2`}>
                                <StreakCounter className={``} />
                                <ChallengeMark2020 className={`object-contain p-8`} />
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
