import axios from 'axios';
import { auth } from '../firebase';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

// Request interceptor to add the Firebase ID token
api.interceptors.request.use(async (config) => {
    try {
        const user = auth.currentUser;
        if (user) {
            const token = await user.getIdToken();
            config.headers.Authorization = `Bearer ${token}`;
        }
    } catch (error) {
        console.error('Error attaching token:', error);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
