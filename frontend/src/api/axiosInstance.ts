import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE == 'production' ? "https://mern-try-production.up.railway.app" :
    'http://localhost:3040'
})


export default axiosInstance