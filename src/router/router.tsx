import { createBrowserRouter, Navigate } from "react-router-dom";
import { Homepage } from "../components/Homepage";
import { Infinite } from "../components/Infinite";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '/lazy',
        element: <Infinite />,

    },
    {
        path: '*',
        element: (
            <Navigate to={'/'}/>
        )
    }
])