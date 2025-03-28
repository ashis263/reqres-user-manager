import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../components/Loader/Loader";

const MainLayout = () => {
    const { isLoading } = useContext(AuthContext);

    //show loader on page load before checking auth state
    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default MainLayout;
