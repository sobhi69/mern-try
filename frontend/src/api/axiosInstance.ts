import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://mern-try-production.up.railway.app"
})


export default axiosInstance