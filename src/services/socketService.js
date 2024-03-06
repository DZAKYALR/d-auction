// src/services/socketService.js
import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3001'; 

export const socket = io(SOCKET_URL);


import React, { useEffect } from 'react';
import { logout } from '../services/authService';
import { socket } from '../services/socketService';

const AuctioneerDashboard = () => {
  useEffect(() => {
    socket.on('bidUpdate', (data) => {
      console.log('Bid Update:', data);
    });

    return () => {
      socket.off('bidUpdate');
    };
  }, []);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <h1>Auctioneer Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
