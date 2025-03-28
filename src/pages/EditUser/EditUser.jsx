import { useLoaderData, useNavigate } from "react-router-dom";
import UpdatingForm from "../../components/UpdatingForm/UpdatingForm";

const EditUser = () => {
    const user = useLoaderData();
    const { avatar } = user.data;
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <div className="max-lg:py-10 lg:h-screen w-4/5 mx-auto flex flex-col gap-10 items-center justify-center">
            <div className="w-full flex p-2 bg-white shadow rounded-lg">
                <button onClick={handleBack} className="btn bg-teal-700 text-white btn-sm sm:btn-md">&lt; Go Back</button>
            </div>
            <div className="bg-white rounded-lg w-full p-5 sm:p-10 shadow">
                <div className="sm:w-1/2 mx-auto flex flex-col items-center gap-5">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-5xl font-bold text-teal-700">Edit User</h1>
                    </div>
                    <div className='w-28 sm:w-32 aspect-square flex justify-center items-center'>
                        <img src={avatar} className='border w-full border-gray-400 rounded-sm' alt="user" />
                    </div>
                    <UpdatingForm user={user.data} />
                </div>
            </div>
        </div>
    );
}

export default EditUser;
