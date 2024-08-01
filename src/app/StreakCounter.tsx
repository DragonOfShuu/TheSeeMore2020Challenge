import useUserData from "../contexts/user/UserDataContext";

type Props = {
    className?: string;
};

const StreakCounter = (props: Props) => {
    const { userData } = useUserData();

    return (
        <div className={props.className}>
            <div className={`size-full flex flex-col text-center`}>
                <h1 className={`text-6xl`}>{userData.dayStreak}</h1>
                <p>Daily Streak</p>
            </div>
        </div>
    );
};

export default StreakCounter;
