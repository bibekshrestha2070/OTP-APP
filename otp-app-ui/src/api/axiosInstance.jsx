import axios from 'axios';
export const BASE_URL = import.meta.env.VITE_BASE_URL;
// Create an instance of Axios
const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default instance;