import axios from 'axios';

const axiosInstance = axios.create();

const tokenInterceptor = (config) => {
  const token = localStorage.getItem('accessToken'); // Replace 'accessToken' with the actual token storage key
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

axiosInstance.interceptors.request.use(tokenInterceptor);
export default axiosInstance
