import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Login = () => {
    const { isAuthenticated, setIsAuthenticated, Toast, setIsLoading } = useContext(AuthContext);
    const { handleSubmit, register } = useForm();
    const axiosPublic = useAxiosPublic();

    //if user is already authenticated, redirect to dashboard
    if (isAuthenticated) {
        return <Navigate to="/userList" />;
    }

    //login form submission
    const submitForm = (data) => {
        //post request to login with axios
        axiosPublic.post('api/login', data)
            .then(response => {
                if (response.status === 200) {
                    //store token in local storage and set isAuthenticated to true
                    localStorage.setItem('token', response.data.token);
                    setIsAuthenticated(true);
                    Toast.fire({
                        icon: 'success',
                        title: 'Login successful'
                    });
                }
                setIsLoading(false);
            })
            .catch(() => {
                Toast.fire({
                    icon: 'error',
                    title: 'Invalid credentials'
                });
            });
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white rounded-lg w-4/5 sm:w-1/2 lg:w-1/3 mx-auto p-10 shadow">
                <div className="mt-5 mb-10 text-center">
                    <h1 className="text-teal-700 text-5xl font-bold">Login</h1>
                    <p className="text-gray-500 mt-1">Please login to continue</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-5 my-5">
                        <div>
                            <label htmlFor="email">Email</label>
                            <br />
                            <input className="input w-full focus:outline-none" type="email" id="email" {...register('email', { required: true })} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <br />
                            <input className="input w-full focus:outline-none" type="password" id="password" {...register('password', { required: true })} />
                        </div>
                        <button className="btn bg-teal-700 text-white w-full" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
