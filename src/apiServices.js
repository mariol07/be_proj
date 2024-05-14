import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://graph.facebook.com/v19.0/', // Facebook Graph API base URL
});

export default apiService;
