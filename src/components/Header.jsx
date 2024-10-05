import React, { useState } from "react"; // Asegúrate de importar useState
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../stylesComponents/StyleHeader.css";
import Logo from "../imgs/eHS-1ebx4o_2J-JNS61v8-transformed.webp";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Importa el hook de autenticación

export default function Header() {
  const { isLoggedIn } = useAuth(); // Obtiene el estado de autenticación
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate("/UserPage"); // Redirige a la página de usuario si está autenticado
    } else {
      navigate("/login"); // Redirige a la página de login si no está autenticado
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid justify-content-between">
        {/* Logo */}
        <Link to="/" className="navbar-brand mx-5" id="logo">
          <img src={Logo} alt="" width="50" height="50" />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Sidebar */}
        <div
          className="sidebar offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          {/* Sidebar header */}
          <div className="offcanvas-header text-white border-bottom">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menú
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          {/* Sidebar body */}
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item mx-2">
                <Link to="/" className="nav-link" aria-current="page">
                  Inicio
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/Nosotros" className="nav-link">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/Catalogo" className="nav-link">
                  Catalogo
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link to="/Contacto" className="nav-link">
                  Contactanos
                </Link>
              </li>
            </ul>
            {/* Login / Sign up  & Cart */}
            <div className="d-flex justify-content-center align-items-center gap-3 mx-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                className="bi bi-person"
                id="iconos-perfil-bolsa"
                viewBox="0 0 16 16"
                onClick={handleProfileClick} // Llama a la función en el click
                style={{ cursor: "pointer" }} // Cambia el cursor para indicar clickeable
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
