import { Helmet } from 'react-helmet-async';
import List from '../../components/List/List';
import useAuth from '../../hooks/useAuth';
import 'animate.css';
import { useEffect, useState } from 'react';

const UserList = () => {
    const { setIsAuthenticated, fetchedUsers, setUsers } = useAuth();
    const [searchKey, setSearchKey] = useState('');

    //filter by searchkey
    useEffect(() => {
        const filtered = fetchedUsers.filter(user => user.first_name.toLowerCase().includes(searchKey.toLowerCase()) | user.last_name.toLowerCase().includes(searchKey.toLowerCase()) )
        setUsers(filtered);
    }, [searchKey])

    //logout    
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    }
    
    return (
        <div className="animate__animated animate__fadeIn max-lg:py-10 lg:h-screen w-4/5 mx-auto flex flex-col gap-10 items-center justify-center">
            <Helmet>
                <title>User List</title>
            </Helmet>
            <div className="w-full flex justify-between p-2 bg-white shadow rounded-lg relative">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Search_Icon.png" className='w-3 h-3 absolute top-[18px] left-36 z-10 sm:top-6 sm:left-44' alt="" />
                <input onChange={(e) => setSearchKey(e.target.value)} type="text" className='input max-sm:input-sm focus:outline-0 w-40 sm:w-48' placeholder="Search" />
                <button onClick={handleLogout} className="btn bg-teal-700 text-white btn-sm sm:btn-md">Logout</button>
            </div>
            <div className="bg-white rounded-lg shadow p-5 sm:p-10 w-full">
                <List />
            </div>
        </div>
    );
}

export default UserList;
