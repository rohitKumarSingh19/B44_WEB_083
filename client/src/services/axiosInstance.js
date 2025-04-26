import axios from 'axios';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Add token automatically to each request
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Make sure you store token on login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
