import { ReactNode, useState } from "react";
import { PageContext, PageType } from "./PageDataContext";

const PageDataComp = (props: { children?: ReactNode }) => {
    const [page, setPage] = useState<PageType>("home");

    return (
        <PageContext.Provider value={{ page, setPage }}>
            {props.children}
        </PageContext.Provider>
    );
};

export default PageDataComp;
