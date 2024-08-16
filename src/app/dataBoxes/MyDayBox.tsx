import { useRef, useState } from "react";
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import TextInput from "../../components/TextInput";
import useUserData from "../../contexts/user/UserDataContext";
import DataBoxBase from "./DataBoxBase";
import useTempState from "../../components/hooks/useTempData";
import YesNoDialog from "../../components/YesNoDialog";
import useCurrentDay from "../../components/hooks/useCurrentDay";

type Props = {
    className?: string;
};

const MyDayBox = (props: Props) => {
    const { userDataDispatch } = useUserData();
    const encourWord = useRef<HTMLInputElement>(null);
    const eoshiftwin = useRef<HTMLTextAreaElement>(null);
    const [error, setError] = useTempState("", 5000);
    const [resetBoxesDialogOpen, setResetBoxesDialogOpen] = useState(false);

    const currDay = useCurrentDay();

    const _verifyText = (
        encourText: string,
        endOfShiftText: string,
    ): string | null => {
        if (!encourText) return 'Filling "Encouraging Word" is required.';
        if (!endOfShiftText) return 'Filling "End of Shift Win" is required.';
        return null;
    };

    const reset = () => {
        if (!encourWord.current || !eoshiftwin.current) return;
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

    const handleResetBoxesResponse = (positive: boolean) => {
        if (positive) {
            reset();
        }
        setResetBoxesDialogOpen(false);
    };

    console.log("curr day is: ", currDay);
    if (!currDay) return null;

    return (
        <div className={props.className}>
            <YesNoDialog
                isOpen={resetBoxesDialogOpen}
                question={`Are you sure you want to reset the boxes?`}
                responseCallback={handleResetBoxesResponse}
            />
            <DataBoxBase name={`My Day`} error={error ?? undefined}>
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
                        <p>{`Calls Today: ${currDay?.calls.length}`}</p>
                        <Button
                            onClick={() => setResetBoxesDialogOpen(true)}
                            notProminent={true}
                        >{`Reset Boxes`}</Button>
                        <Button onClick={submitDay}>{`Finish My Day`}</Button>
                    </div>
                </div>
            </DataBoxBase>
        </div>
    );
};

export default MyDayBox;
