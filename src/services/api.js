import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber.vvcdistribuidora.com.br',
});

export default api;
