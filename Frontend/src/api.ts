import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_PROD_BASE_URL || 'http://localhost:5000/api/'
});

export default api;