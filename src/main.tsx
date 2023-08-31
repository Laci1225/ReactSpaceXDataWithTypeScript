import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LaunchesList from "./pages/LaunchesList";
import LaunchDetails from "./pages/LaunchDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LaunchesList/>
    },
    {
        path: "/launches/:id",
        element: <LaunchDetails/>
    }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
