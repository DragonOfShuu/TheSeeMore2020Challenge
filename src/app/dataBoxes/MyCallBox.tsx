import { useRef, useState } from "react";
import useUserData from "../../contexts/user/UserDataContext";
import DataBoxBase from "./DataBoxBase";
import Checkbox from "../../components/Checkbox";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";
import { addCall } from "../../integratedDataServer/apis/user";
import YesNoDialog from "../../components/YesNoDialog";

type Props = {
    className?: string;
};

type Checks = {
    guarantee: boolean;
    postedSalesInChat: boolean;
    subscription: boolean;
    valueAddedOffer: boolean;
    verifiedECPDialog: boolean;
    verifiedPrescription: boolean;
};

const checkConversionTable: { [T in keyof Checks]: string } = {
    guarantee: "Guarantee",
    postedSalesInChat: "Post Sale In Chat",
    subscription: "Subscription",
    valueAddedOffer: "Value Added Offer",
    verifiedECPDialog: "ECP Dialog",
    verifiedPrescription: "Verify Prescription",
};

const MyCallCheckboxes = (props: {
    className?: string;
    checks: Checks;
    setChecks: (checks: Checks) => unknown;
}) => {
    return (
        <div className={props.className}>
            <div className={`size-full flex flex-col gap-4`}>
                {Object.entries(props.checks).map((v) => (
                    <Checkbox
                        text={checkConversionTable[v[0] as keyof Checks]}
                        checked={v[1]}
                        key={v[0]}
                        onChange={(e) =>
                            props.setChecks({
                                ...props.checks,
                                [v[0]]: e.target.checked,
                            })
                        }
                    />
                ))}
            </div>
        </div>
    );
};

const MyCallBox = (props: Props) => {
    const { userData } = useUserData();
    const [checks, setChecks] = useState<Checks>({
        verifiedPrescription: false,
        guarantee: false,
        valueAddedOffer: false,
        subscription: false,
        verifiedECPDialog: false,
        postedSalesInChat: false,
    });
    const extraInfo = useRef<HTMLTextAreaElement>(null);
    const [showResetDialog, setShowResetDialog] = useState<boolean>(false);

    const reset = () => {
        setChecks((c) => {
            return Object.keys(c).reduce<Partial<Checks>>((prev, curr) => {
                prev[curr as keyof Checks] = false;
                return prev;
            }, {}) as Checks;
        });
        if (extraInfo.current) extraInfo.current.value = ``;
    };

    const submit = () => {
        const extraInfoText = extraInfo.current?.value;
        if (extraInfoText === undefined) return;

        addCall({
            ...checks,
            extraInfo: extraInfoText,
            completionDate: Date.now(),
        }).then(() => reset());
    };

    const handleResetResponse = (positive: boolean) => {
        if (positive) reset();
        setShowResetDialog(false);
    };

    if (!userData.days.length || userData.days[0].isDayClosed) return null;

    return (
        <div className={props.className}>
            <YesNoDialog
                isOpen={showResetDialog}
                question={`Are you sure you want to reset the boxes?`}
                responseCallback={handleResetResponse}
            />
            <DataBoxBase name={`My Call`}>
                <div className={`grid gap-4 md:grid-flow-col`}>
                    <MyCallCheckboxes checks={checks} setChecks={setChecks} />
                    <div
                        className={`flex flex-col items-stretch gap-2 justify-end`}
                    >
                        <p>{`Extra Info`}</p>
                        <TextArea ref={extraInfo} className={`w-full`} />
                        <div className={`flex flex-col items-stretch gap-3`}>
                            <Button
                                notProminent
                                onClick={() => setShowResetDialog(true)}
                            >
                                Reset Boxes
                            </Button>
                            <Button onClick={submit}>Submit Call</Button>
                        </div>
                    </div>
                </div>
            </DataBoxBase>
        </div>
    );
};

export default MyCallBox;
