import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Login />
            }
        ]
    }
]);

export default router;