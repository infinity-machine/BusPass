import React from 'react'
import Ticket from './pages/Ticket'
import LoginForm from './components/LoginForm'
import { useState, useEffect } from 'react';
import { isAuthenticated } from './utils/auth';


const App = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const user_data = isAuthenticated()
    if (user_data) setUser(user_data)
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div>
      < Ticket />
    </div>
  );
};

export default App
