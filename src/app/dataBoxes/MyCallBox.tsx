import { useRef, useState } from "react";
import useUserData from "../../contexts/user/UserDataContext";
import DataBoxBase from "./DataBoxBase";
import Checkbox from "../../components/Checkbox";
import TextArea from "../../components/TextArea";
import Button from "../../components/Button";

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

const MyCallCheckboxes = (props: {className?: string, checks: Checks, setChecks: (checks: Checks)=> unknown}) => {
    return (
        <div className={props.className}>
            <div className={`size-full flex flex-col gap-4`}>
                {Object.entries(props.checks).map((v) => (
                    <Checkbox
                        text={
                            checkConversionTable[v[0] as keyof Checks]
                        }
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
    )
}

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
    const eoshiftwin = useRef<HTMLTextAreaElement>(null);

    const reset = () => {
        setChecks((c)=> {
            const x = Object.entries(c).reduce<Partial<Checks>>((prev, curr) => {
                return {...prev, [curr[0] as keyof Checks]: false};
            }, {})
            return x as Checks
        })
        if (eoshiftwin.current)
            eoshiftwin.current.value = ``;
    }

    if (!userData.days.length || userData.days[0].isDayClosed)
        return null;

    return (
        <div className={props.className}>
            <DataBoxBase name={`My Call`}>
                <div className={`grid gap-4 md:grid-flow-col`}>
                    <MyCallCheckboxes checks={checks} setChecks={setChecks} />
                    <div className={`flex flex-col items-stretch gap-2`}>
                        <p>My End of Shift Win</p>
                        <TextArea ref={eoshiftwin} className={`w-full`} />
                        <div className={`flex flex-col items-stretch gap-2`}>
                            <Button notProminent onClick={reset}>Reset</Button>
                            <Button>Submit Call</Button>
                        </div>
                    </div>
                </div>
            </DataBoxBase>
        </div>
    );
};

export default MyCallBox;
