import axios from 'axios';

const config = {
  baseURL: process.env.REACT_APP_API_BASE_URL
};

const apiService = axios.create(config);

export default apiService;
