import { AuthContext } from '../../providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }
    return children;
}

export default PrivateRoute;
