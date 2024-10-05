import React from 'react';
import { useAuth } from '../AuthContext';

export default function UserPage() {
  const { logout } = useAuth(); 

  const handleLogout = () => {
    logout(); 
    window.location.href = "/login"; 
  };

  return (
    <div>
      <h1>Usuario</h1>
      <button onClick={handleLogout} className="btn btn-danger">
        Cerrar Sesión
      </button>
    </div>
  );
}
