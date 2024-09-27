import axios from "axios";

// URL base del backend
const API_URL = "http://localhost:8080/api/motos";

// Función para obtener todas las motos
export const getAllMotos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo las motos del backend:", error);
    throw error;
  }
};
