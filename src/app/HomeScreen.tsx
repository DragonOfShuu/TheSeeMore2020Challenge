import Button from "../components/Button";
import useCurrentDay from "../components/hooks/useCurrentDay";
import ChallengeMark2020 from "../components/svgs/2020ChallengeMark";
import useUserData from "../contexts/user/UserDataContext";
import MyCallBox from "./dataBoxes/MyCallBox";
import MyDayBox from "./dataBoxes/MyDayBox";
import StreakCounter from "./StreakCounter";
import styles from './HomeScreen.module.sass'

type Props = {
    className?: string
}

const HomeScreen = (props: Props) => {
    const { userDataDispatch } = useUserData();

    const currDay = useCurrentDay();

    const startDay = () => {
        userDataDispatch({ type: "startDay" });
    };

    return (
        <div className={props.className}>
            {
                currDay ?
                    <>
                        <div className={`absolute max-xl:hidden`}>
                            <h2 className={`relative -top-9 -left-16 text-cblue-900/40 -z-10 text-6xl font-mono ${styles.blinkOn}`}>
                                2020 CHALLENGE
                            </h2>
                        </div>
                        {/* Arranges this content like a grid */}
                        <div className={`size-full flex flex-col gap-6 lg:flex-row-reverse lg:justify-center lg:gap-2 items-stretch`}>
                            <div className={`flex flex-col justify-around lg:w-1/2 ${styles.topScreenToPosition}`}>
                                <StreakCounter />
                                <ChallengeMark2020 className={`object-contain p-8 max-lg:hidden`} />
                            </div>
                            <div className={`flex flex-col items-stretch gap-4 w-full lg:w-1/2`}>
                                <MyDayBox className={`${styles.bottomScreenToPosition}`} />
                                <MyCallBox className={`${styles.bottomScreenToPosition}`} />
                            </div>
                        </div>
                    </>
                    :
                    <div
                        className={`flex flex-col gap-6 items-center place-content-center place-items-center h-full`}
                    >
                        <StreakCounter className={`${styles.topScreenToPosition}`} />
                        <Button onClick={startDay} className={`${styles.bottomScreenToPosition}`}>{`Start Day`}</Button>
                    </div>
            }
        </div>
    )
}

export default HomeScreen;