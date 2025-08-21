import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://carefree-geek.vercel.app', // if not using proxy
  withCredentials: true,
});
