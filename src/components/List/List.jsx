import { useEffect } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import User from '../User/User';
import Pagination from '../Pagination/Pagination';

const List = () => {
    const { users, setUsers, Toast, currentPage, setTotalPages, setFetchedUsers } = useAuth();
    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        //fetching users with axiosPrivate to prevent unauthorized data fetching
        axiosPrivate.get(`/api/users?page=${currentPage}`)
            .then(response => {
                setUsers(response.data.data);
                //set another array of users just to add client side search functionality
                setFetchedUsers(response.data.data);
                //set total pages for pagination as it was on data
                setTotalPages(response.data.total_pages);
            })
            .catch(() => {
                Toast.fire({
                    icon: 'error',
                    title: 'Error fetching users!'
                });
            });
        //refetch users when currentPage changes
    }, [currentPage]);

    return (
        <div>
            <h1 className="text-3xl sm:text-5xl font-bold text-teal-700">All Users</h1>
            <div className={`grid grid-cols-1 ${!users.length ? "" : "sm:grid-cols-2 lg:grid-cols-3"} gap-4 mt-5 sm:mt-10 min-h-[65vh] lg:min-h-[54vh]`}>
                {
                    users.length > 0
                    ?
                    users.map(user => <User key={user.id} user={user} />)
                    :
                    //if no users avaiable after
                    <div className='flex justify-center items-center text-2xl text-red-500 text-center w-full'>
                        <h1>No matched user in this page</h1>
                    </div>
                }
            </div>
            <Pagination />
        </div>
    );
}

export default List;
