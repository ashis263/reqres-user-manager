import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/'
});

const useAxiosPublic = () => {
  const { Toast, setIsAuthenticated } = useContext(AuthContext);
  const token = localStorage.getItem('token');
  if (!token) {
    Toast.fire({
      icon: 'error',
      title: 'Seesion Expired!'
    });
    setIsAuthenticated(false);
  } else {
    return axiosInstance;
  }
}

export default useAxiosPublic;