import React, { useState } from "react";
import { registerUser } from "../services/UserService"; // Importación correcta de la función registerUser

function RegisterPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    preNombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    dni: "",
    telefono: "",
    correoElectronico: "",
    edad: "",
    contraseña: "",
  });

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
      const response = await registerUser(formData);
      alert("Registro exitoso");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      alert("Error al registrar usuario: " + (error.response?.data || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ingrese su nombre"
        />
      </div>
      <div>
        <label>Pre Nombre</label>
        <input
          type="text"
          name="preNombre"
          value={formData.preNombre}
          onChange={handleChange}
          placeholder="Ingrese su pre nombre"
        />
      </div>
      <div>
        <label>Apellido Paterno</label>
        <input
          type="text"
          name="apellidoPaterno"
          value={formData.apellidoPaterno}
          onChange={handleChange}
          placeholder="Ingrese su apellido paterno"
        />
      </div>
      <div>
        <label>Apellido Materno</label>
        <input
          type="text"
          name="apellidoMaterno"
          value={formData.apellidoMaterno}
          onChange={handleChange}
          placeholder="Ingrese su apellido materno"
        />
      </div>
      <div>
        <label>DNI</label>
        <input
          type="text"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          placeholder="Ingrese su DNI"
        />
      </div>
      <div>
        <label>Teléfono</label>
        <input
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="Ingrese su teléfono"
        />
      </div>
      <div>
        <label>Correo Electrónico</label>
        <input
          type="email"
          name="correoElectronico"
          value={formData.correoElectronico}
          onChange={handleChange}
          placeholder="Ingrese su correo electrónico"
        />
      </div>
      <div>
        <label>Edad</label>
        <input
          type="number"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
          placeholder="Ingrese su edad"
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
        />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
}

export default RegisterPage;
