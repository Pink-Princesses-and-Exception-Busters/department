import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;