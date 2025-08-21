import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:8000', // if not using proxy
  withCredentials: true,
});