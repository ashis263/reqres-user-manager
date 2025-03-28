import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const UserList = () => {
    const { setIsAuthenticated } = useContext(AuthContext);
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    }
    return (
        <div className="h-screen w-4/5 mx-auto flex flex-col gap-10 items-center justify-center">
            <div className="w-full flex justify-end p-2 bg-white shadow rounded-lg">
                <button onClick={handleLogout} className="btn bg-teal-700 text-white btn-sm sm:btn-md">Logout</button>
            </div>
            <div className="bg-white rounded-lg shadow p-10 w-full">
                
            </div>
        </div>
    );
}

export default UserList;
