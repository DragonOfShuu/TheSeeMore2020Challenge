import { createContext, useContext } from "react";

export type PageType = "home" | "calls";

// export const PAGE_COUNT = 2;
export const ALL_PAGES = ["home", "calls"];

export type PageContextType = {
    page: PageType;
    setPage: (newPage: PageType) => unknown;
};

export const PageContext = createContext<null | PageContextType>(null);

const usePageContext = () => {
    return useContext(PageContext) as PageContextType;
};

export default usePageContext;
