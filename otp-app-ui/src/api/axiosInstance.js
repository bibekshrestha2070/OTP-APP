import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL

// Create an instance of Axios
const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default instance;