import axios from 'axios';

export default function httpService(authService) {
  const axiosInstance = axios.create();

  if (authService) {
    axiosInstance.interceptors.request.use((config) => {
      const newConfig = config;
      return authService.getToken().then((token) => {
        newConfig.headers.Authorization = `Token token="${token}"`;
        return newConfig;
      }).catch(error => Promise.reject(error));
    }, error => Promise.reject(error));
  }

  return axiosInstance;
}
