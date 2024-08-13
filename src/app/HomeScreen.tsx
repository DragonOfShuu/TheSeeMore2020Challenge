import ChallengeMark2020 from "../components/svgs/2020ChallengeMark";
import useUserData from "../contexts/user/UserDataContext";
import MyCallBox from "./dataBoxes/MyCallBox";
import MyDayBox from "./dataBoxes/MyDayBox";
import StreakCounter from "./StreakCounter";

type Props = {
    className?: string
}

const HomeScreen = (props: Props) => {
    const {userData} = useUserData();

    const currDayOpen = userData.days.length && !userData.days[0].isDayClosed;

    return (
        <div className={props.className}>
            {/* Arranges this content like a grid */}
            <div className={`absolute max-xl:hidden ${currDayOpen?'':'hidden'}`}>
                <h2 className={`relative -top-9 -left-16 text-cblue-900/40 -z-10 text-6xl font-mono`}>
                    2020 CHALLENGE
                </h2>
            </div>
            <div className={`size-full flex flex-col gap-6 ${currDayOpen?`lg:flex-row-reverse lg:justify-center lg:gap-2 items-stretch`:`items-center`}`}>
                <div className={`flex flex-col justify-around lg:w-1/2`}>
                    <StreakCounter />
                    <ChallengeMark2020 className={`object-contain p-8 max-lg:hidden ${currDayOpen?``:`hidden`}`} />
                </div>
                <div className={`flex flex-col items-stretch gap-4 w-full lg:w-1/2`}>
                    <MyDayBox />
                    <MyCallBox />
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;