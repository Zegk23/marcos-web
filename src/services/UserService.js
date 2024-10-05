// src/services/UserService.js
import axios from "axios";

const API_URL = "http://localhost:8081/api/auth";

// Función para registrar un nuevo usuario
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error en el registro:", error);
    throw error;
  }
};

// Función para iniciar sesión
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data) {
      // Guardar token en localStorage
      localStorage.setItem("userToken", response.data);
    }
    return response.data;
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    throw error;
  }
};

// Función para cerrar sesión
export const logoutUser = () => {
  localStorage.removeItem("userToken");
};
