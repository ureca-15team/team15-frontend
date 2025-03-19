import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080', // API 기본 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
