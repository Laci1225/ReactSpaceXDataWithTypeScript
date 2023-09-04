import {Navigate} from "react-router-dom";
import {PropsWithChildren} from "react";

interface ProtectedRootProps {
    safeToLoad: boolean
    redirectTo: string
}

export default function ProtectedRoute({safeToLoad, children, redirectTo}: PropsWithChildren<ProtectedRootProps>) {
    if (!safeToLoad) {
        return <Navigate to={redirectTo} replace/>
    }

    return children;
}