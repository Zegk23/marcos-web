import React, { useState } from "react";
import { loginUser } from "../services/UserService";
import { useAuth } from "../AuthContext";

function LoginPage() {
  const [formData, setFormData] = useState({
    correoElectronico: "",
    contraseña: "",
  });

  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Datos enviados:", formData);
      const token = await loginUser(formData);
      if (token) {
        alert("Inicio de sesión exitoso");
        localStorage.setItem("userToken", token);
        login();
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert(
        "Error al iniciar sesión: " + (error.response?.data || error.message)
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Correo Electrónico</label>
        <input
          type="email"
          name="correoElectronico"
          value={formData.correoElectronico}
          onChange={handleChange}
          placeholder="Ingrese su correo electrónico"
          required
        />
      </div>
      <div>
        <label>Contraseña</label>
        <input
          type="password"
          name="contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          placeholder="Ingrese su contraseña"
          required
        />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}

export default LoginPage;
