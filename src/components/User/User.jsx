import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const User = ({ user }) => {
    const { Toast, users, setUsers } = useAuth();
    const { id, avatar, first_name, last_name } = user;
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    AOS.init();

    //delete user
    const handleDelete = () => {
        axiosPrivate.delete(`api/users/${id}`)
            .then(response => {
                if (response.status === 204) {
                    const newUsers = users.filter(user => user.id !== id);
                    setUsers(newUsers);
                    Toast.fire({
                        icon: 'success',
                        title: 'User deleted successfully'
                    });
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    //edit user
    const handleEdit = () => {
        navigate(`/editUser/${id}`);
    }

    return (
        <div data-aos="fade-in" data-aos-duration='1500' className='flex items-center space-x-4 p-3 bg-gray-100 justify-center rounded-md'>
            {/* user avatar */}
            <div className='w-1/2 aspect-square flex justify-center items-center'>
                <img src={avatar} className='border w-full border-gray-400 rounded-sm' alt="user" />
            </div>
            {/* first and last name */}
            <div className='flex flex-col justify-between w-1/2 h-full'>
                <div className='space-y-2'>
                    <div>
                        <p className='text-[12px] text-gray-400 underline'>First Name</p>
                        <h3 className='text-xl leading-4 font-bold'>{first_name}</h3>
                    </div>
                    <div>
                        <p className='text-[12px] text-gray-400 underline'>Last Name</p>
                        <h3 className='text-xl leading-4 font-bold'>{last_name}</h3>
                    </div>
                </div>
                {/* action buttons */}
                <div className='w-full flex justify-between'>
                    <button onClick={handleEdit} className='btn btn-outline btn-xs sm:btn-sm text-teal-700 w-2/5'>Edit</button>
                    <button onClick={handleDelete} className='btn btn-outline btn-xs sm:btn-sm text-red-500 w-2/5'>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default User;
