const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

import axios from 'axios';

const API = axios.create({
  baseURL: `${API_BASE_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
