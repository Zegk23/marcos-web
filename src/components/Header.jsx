import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../stylesComponents/StyleHeader.css";
import Logo from "../imgs/eHS-1ebx4o_2J-JNS61v8-transformed.webp";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid justify-content-between">
        {/* <!-- Logo --> */}
        <Link to="/" class="navbar-brand mx-5" id="logo">
          <img src={Logo} alt="" width="50" height="50" />
        </Link>

        {/* <!-- Toggle Button  --> */}

        <button
          class="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Sidebar --> */}
        <div
          class="sidebar offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          {/* <!-- Sidebar header --> */}
          <div class="offcanvas-header text-white border-bottom">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              Menú
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white shadow-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          {/* <!-- Sidebar body --> */}
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li class="nav-item mx-2">
                <Link to="/" class="nav-link" aria-current="page">
                  Inicio
                </Link>
              </li>

              <li class="nav-item mx-2">
                <Link to="/Nosotros" class="nav-link">
                  Nosotros
                </Link>
              </li>

              <li class="nav-item mx-2">
                <Link to="/Catalogo" class="nav-link">
                  Catalogo
                </Link>
              </li>

              <li class="nav-item mx-2">
                <Link to="/Contacto" class="nav-link">
                  Contactanos
                </Link>
              </li>
            </ul>
            {/* <!-- Login / Sign up  & Cart--> */}
            <div class="d-flex justify-content-center align-items-center gap-3 mx-4">
              <a href="/templates/login.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  class="bi bi-person"
                  id="iconos-perfil-bolsa"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
