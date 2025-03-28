import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import UserList from "../pages/UserList/UserList";
import PrivateRoute from "../routes/PrivateRoute/PrivateRoute"
import EditUser from "../pages/EditUser/EditUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "userList",
                element: <PrivateRoute><UserList /></PrivateRoute>
            },
            {
                path: "editUser/:id",
                element: <PrivateRoute><EditUser /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://reqres.in/api/users/${params.id}`)
            }
        ]
    }
]);

export default router;