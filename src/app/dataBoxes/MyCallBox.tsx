import { useState } from "react";
import useUserData from "../../contexts/user/UserDataContext";
import DataBoxBase from "./DataBoxBase";
import Checkbox from "../../components/Checkbox";

type Props = {
    className?: string;
};

type Checks = {
    guarantee: boolean,
    postedSalesInChat: boolean,
    subscription: boolean,
    valueAddedOffer: boolean,
    verifiedECPDialog: boolean,
    verifiedPrescription: boolean,
}

const checkConversionTable: {[T in keyof Checks]: string} = {
    guarantee: 'Guarantee',
    postedSalesInChat: 'Post Sale In Chat',
    subscription: 'Subscription',
    valueAddedOffer: 'Value Added Offer',
    verifiedECPDialog: 'ECP Dialog',
    verifiedPrescription: 'Verify Prescription'
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
    })

    // if (!userData.days.length || userData.days[0].isDayClosed)
    //     return null;

    return (
        <div className={props.className}>
            <DataBoxBase name={`My Call`}>
                <div className={`grid`}>
                    <div className={`flex flex-col gap-4`}>
                        {
                            Object.entries(checks).map((v) => (
                                <Checkbox 
                                    text={checkConversionTable[v[0] as keyof Checks]} 
                                    checked={v[1]} 
                                    key={v[0]}
                                    onChange={(e) => 
                                        setChecks({...checks, [v[0]]: e.target.checked})
                                    } />
                            ))
                        }
                    </div>
                </div>
            </DataBoxBase>
        </div>
    );
};

export default MyCallBox;
