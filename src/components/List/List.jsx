import { useEffect } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import User from '../User/User';

const List = () => {
    const { users, setUsers, Toast } = useAuth()
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        //fetching users with axiosPrivate to prevent unauthorized data fetching
        axiosPrivate.get('/api/users?page=1')
            .then(response => {
                setUsers(response.data.data);
            })
            .catch(() => {
                Toast.fire({
                    icon: 'error',
                    title: 'Error fetching users!'
                });
            });
    }, []);

    return (
        <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-teal-700">All Users</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 sm:mt-10'>
                {
                    users.length > 0
                    &&
                    users.map(user => <User key={user.id} user={user} />)
                }
            </div>
        </div>
    );
}

export default List;
