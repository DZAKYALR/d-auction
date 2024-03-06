import React from 'react';
import { Login } from '../components';
import { useLogin } from '../services/authService';

const LoginPage = () => {
  const { data, error, isLoading, isError } = useLogin();

  const handleLogin = async (username, password) => {
    try {
      // Memanggil fungsi login yang menggunakan React Query
      await login.mutate({ username, password });
      // Handle logika pengalihan berdasarkan role pengguna
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message}</p>}
      {!isLoading && !isError && <Login onLogin={handleLogin} />}
    </div>
  );
};

export default LoginPage;
