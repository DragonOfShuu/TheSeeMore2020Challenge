import "./App.sass";
import MyCallBox from "./dataBoxes/MyCallBox";
import MyDayBox from "./dataBoxes/MyDayBox";
import NavBar from "./NavBar";
import StreakCounter from "./StreakCounter";

function App() {
    return (
        <>
            <NavBar />
            <div className={`m-10 px-2`}>
                <div className={`flex flex-col items-stretch gap-6`}>
                    <StreakCounter />
                    <div className={`flex flex-col items-stretch gap-4`}>
                        <MyDayBox />
                        <MyCallBox />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
