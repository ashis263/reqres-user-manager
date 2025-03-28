import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'https://reqres.in/'
});

export default axiosPublic;