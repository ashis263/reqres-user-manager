import { useEffect } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import User from '../User/User';

const List = () => {
    const { users, setUsers, Toast } = useAuth()
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        axiosPrivate.get('/api/users?page=1')
            .then(response => {
                setUsers(response.data);
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
            <h1 className="text-4xl sm:text-5xl font-bold text-teal-700">All Users</h1>
            <div>
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
