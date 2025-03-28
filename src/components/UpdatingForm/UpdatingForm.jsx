import { useForm } from "react-hook-form";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const UpdatingForm = ({ user }) => {
    const { Toast, users, setUsers } = useAuth();
    const { id, first_name, last_name, avatar, email } = user;
    const { register, handleSubmit } = useForm();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    //updating user
    const handleUpdate = (data) => {
        if(user.email === data.email && user.first_name === data.first_name && user.last_name === data.last_name) {
            Toast.fire({
                icon: 'warning',
                title: 'Please change some data to update!'
            });
            return;
        }
        axiosPrivate.put(`/api/users/${id}`, data)
            .then(response => {
                if (response.status === 200) {
                    //updating user in users state
                    const newData = { id, avatar, ...data };
                    const updatedUsers = users.map(user => user.id === id ? newData : user);
                    setUsers(updatedUsers);
                    //navigating back to user list, but it won't update on user list as we can not update data in this api (it is changing and shows for a very little time until useeffect fetches data again)
                    navigate(-1);
                    Toast.fire({
                        icon: 'success',
                        title: 'User updated successfully'
                    });
                }
            })
            .catch((error) => {
                Toast.fire({
                    icon: 'error',
                    title: error.message
                });
            });
    }

    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(handleUpdate)} className="w-full space-y-3">
                <div>
                    <label className="text-gray-600 text-xs underline" htmlFor="first_name">First Name</label>
                    <br />
                    <input className="input w-full focus:outline-none border-0 pl-0 border-b rounded-none border-teal-900 font-bold" type="first_name" defaultValue={first_name} {...register('first_name', { required: true })} />
                </div>
                <div>
                    <label className="text-gray-600 text-xs underline" htmlFor="last_name">Last Name</label>
                    <br />
                    <input className="input w-full focus:outline-none border-0 pl-0 border-b rounded-none border-teal-900 font-bold" type="last_name" defaultValue={last_name} {...register('last_name', { required: true })} />
                </div>
                <div>
                    <label className="text-gray-600 text-xs underline" htmlFor="email">Email</label>
                    <br />
                    <input className="input w-full focus:outline-none border-0 pl-0 border-b rounded-none border-teal-900 font-bold" type="email" defaultValue={email} {...register('email', { required: true })} />
                </div>
                <button className="btn bg-teal-700 text-white w-full" type="submit">Update</button>
            </form>
        </div>
    );
}

export default UpdatingForm;
