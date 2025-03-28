import List from '../../components/List/List';
import useAuth from '../../hooks/useAuth';

const UserList = () => {
    const { setIsAuthenticated  } = useAuth();
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    }
    return (
        <div className="max-lg:py-10 lg:h-screen w-4/5 mx-auto flex flex-col gap-10 items-center justify-center">
            <div className="w-full flex justify-end p-2 bg-white shadow rounded-lg">
                <button onClick={handleLogout} className="btn bg-teal-700 text-white btn-sm sm:btn-md">Logout</button>
            </div>
            <div className="bg-white rounded-lg shadow p-5 sm:p-10 w-full">
                <List />
            </div>
        </div>
    );
}

export default UserList;
