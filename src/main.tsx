import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.sass";
import { ErrorBoundary } from "react-error-boundary";
import ErrorUwU from "./ErrorUwU.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ErrorBoundary FallbackComponent={ErrorUwU}>
            <App />
        </ErrorBoundary>
    </React.StrictMode>,
);
