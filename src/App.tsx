import AuthStore from "./store/AuthStore.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute.tsx";
import LaunchesList from "./pages/LaunchesList.tsx";
import LaunchDetails from "./pages/LaunchDetails.tsx";
import Login from "./pages/Login.tsx";
import {useState} from "react";

const router = (isAuthenticated: boolean) => {
    return createBrowserRouter([
        {
            path: '/',
            element: (
                <ProtectedRoute safeToLoad={isAuthenticated} redirectTo={"/login"}>
                    <LaunchesList/>
                </ProtectedRoute>)
        },
        {
            path: "/launches/:id",
            element: (
                <ProtectedRoute safeToLoad={isAuthenticated} redirectTo={"/login"}>
                    <LaunchDetails/>
                </ProtectedRoute>)
        },
        {
            path: "/login",
            element:
                (
                    <ProtectedRoute safeToLoad={!isAuthenticated} redirectTo={"/"}>
                        <Login/>
                    </ProtectedRoute>
                )
        }
    ])
}
export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <AuthStore.Provider value={{isAuthenticated, setIsAuthenticated}}>
            <RouterProvider router={router(isAuthenticated)}/>
        </AuthStore.Provider>
    )
}