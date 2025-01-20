import { createBrowserRouter, Navigate } from "react-router-dom";
import { Homepage } from "../components/Homepage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />,
    },
    {
        path: '*',
        element: (
            <Navigate to={'/'}/>
        )
    }
])