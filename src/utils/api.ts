import axios, { AxiosInstance } from 'axios';

const baseURL = 'http://localhost:8080/api/v1';

const api: AxiosInstance = axios.create({
  baseURL,
});

export default api;
