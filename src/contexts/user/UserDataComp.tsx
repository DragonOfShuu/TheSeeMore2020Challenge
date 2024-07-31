import { lazy, ReactNode, Suspense } from "react";

type Props = {
    children: ReactNode;
};

const UserDataCompLoading = lazy(() => import("./UserDataRaw"));

const UserDataComp = (props: Props) => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <UserDataCompLoading>{props.children}</UserDataCompLoading>
        </Suspense>
    );
};

export default UserDataComp;
