import { useRef, useState } from "react";
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import TextInput from "../../components/TextInput";
import useUserData from "../../contexts/user/UserDataContext";
import DataBoxBase from "./DataBoxBase";

type Props = {
    className?: string;
};

const MyDayBox = (props: Props) => {
    const { userData, userDataDispatch } = useUserData();
    const encourWord = useRef<HTMLInputElement>(null);
    const eoshiftwin = useRef<HTMLTextAreaElement>(null);
    const [error, setError] = useState<string>("");

    const currDayOpen = userData.days.length && !userData.days[0].isDayClosed;

    const startDay = () => {
        userDataDispatch({ type: "startDay" });
    };

    const _verifyText = (
        encourText: string,
        endOfShiftText: string,
    ): string | null => {
        if (!encourText) return 'Filling "Encouraging Word" is required.';
        if (!endOfShiftText) return 'Filling "End of Shift Win" is required.';
        return null;
    };

    const reset = () => {
        if (!encourWord.current || !eoshiftwin.current)
            return;
        encourWord.current.value = ``;
        eoshiftwin.current.value = ``;
    };

    const submitDay = () => {
        if (!encourWord.current || !eoshiftwin.current) return;
        const encourWordText = encourWord.current.value;
        const endOfShiftWinText = eoshiftwin.current.value;

        const possibleError = _verifyText(encourWordText, endOfShiftWinText);
        if (possibleError !== null) {
            setError(possibleError);
            return;
        }

        userDataDispatch({
            type: "closeDay",
            encourWord: encourWordText,
            endOfShiftWin: endOfShiftWinText,
        }).then(() => {
            reset();
            setError("");
        });
    };

    return (
        <div className={props.className}>
            {currDayOpen ? (
                <DataBoxBase name={`My Day`} error={error}>
                    <div className={`grid gap-4 md:grid-flow-col`}>
                        <div className={`flex flex-col items-stretch gap-1`}>
                            <p>My Encouraging Word</p>
                            <TextInput className={`w-full`} ref={encourWord} />
                            <p>My End of Shift Win</p>
                            <TextArea className={`w-full`} ref={eoshiftwin} />
                        </div>
                        <div
                            className={`flex flex-col justify-end gap-3 items-stretch`}
                        >
                            <Button onClick={reset} notProminent={true}>{`Reset Boxes`}</Button>
                            <Button
                                onClick={submitDay}
                            >{`Finish My Day`}</Button>
                        </div>
                    </div>
                </DataBoxBase>
            ) : (
                <div
                    className={`flex flex-col items-center place-content-center place-items-center h-full`}
                >
                    <Button onClick={startDay}>{`Start Day`}</Button>
                </div>
            )}
        </div>
    );
};

export default MyDayBox;
