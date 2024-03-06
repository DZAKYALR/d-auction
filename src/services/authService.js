import axios from 'axios';
import { useQuery } from 'react-query';

const API_URL = 'http://localhost:3001';

const login = async ({ username, password }) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

export const useLogin = () => {
  return useQuery('login', login);
};

export const logout = async () => {
  };