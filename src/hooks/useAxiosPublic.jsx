import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in/'
});

const useAxiosPrivate = () => {
  return axiosInstance;
}

export default useAxiosPrivate;