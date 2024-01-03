// axiosInstance.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // Adjust the base URL to match your backend
  timeout: 5000, // Adjust timeout as needed
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers if required
  },
});

export default instance;
