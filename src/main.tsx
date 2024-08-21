import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.sass";
import { ErrorBoundary } from "react-error-boundary";
import ErrorUwU from "./ErrorUwU.tsx";
import ThemeDataComp from "./contexts/theme/ThemeDataComp.tsx";
import UserDataComp from "./contexts/user/UserDataComp.tsx";
import PageDataComp from "./contexts/page/PageDataComp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ErrorBoundary FallbackComponent={ErrorUwU}>
            <ThemeDataComp>
                <UserDataComp>
                    <PageDataComp>
                        <App />
                    </PageDataComp>
                </UserDataComp>
            </ThemeDataComp>
        </ErrorBoundary>
    </React.StrictMode>,
);
