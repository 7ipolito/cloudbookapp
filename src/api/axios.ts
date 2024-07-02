import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://cloudbook-backend-production-1a6a.up.railway.app/'
});
