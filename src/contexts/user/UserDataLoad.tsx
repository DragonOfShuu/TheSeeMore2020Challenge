import { lazy, ReactNode, Suspense } from "react";

type Props = {
    children: ReactNode,
}

const UserDataComp = lazy(() => new Promise(async resolve => {
        const rmodule = import("./UserDataComp");

        resolve(await rmodule)
    })
)

const UserDataLoad = (props: Props) => {
    return (
        <Suspense fallback={<>Loading...</>}>
            <UserDataComp>
                {props.children}
            </UserDataComp>
        </Suspense>
    )
}

export default UserDataLoad;