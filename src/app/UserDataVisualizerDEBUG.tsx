import useUserData from "../contexts/user/UserDataContext";

const UserDataVisualizer = () => {
    const { userData } = useUserData();

    return (
        <div
            className={`text-white bg-cblue-500 flex flex-col gap-4 text-left`}
        >
            <pre>{userData.toString()}</pre>
            <pre className={`wrap`}>
                {JSON.stringify(userData, undefined, 4)}
            </pre>
        </div>
    );
};

export default UserDataVisualizer;
