import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../stylesPages/styleMotoDetail.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
// Componentes de Especificaciones
import EspecificacionesMotor from "../components/EspecificacionesMotor";
import EspecificacionesFreno from "../components/EspecificacionesFreno";
import EspecificacionesLlantas from "../components/EspecificacionesLlantas";
import EspecificacionesSuspension from "../components/EspecificacionesSuspension";
import EspecificacionesRendimiento from "../components/EspecificacionesRendimiento";
import EspecificacionesDimensiones from "../components/EspecificacionesDimensiones";

// UseState y UseEffect para el responsive de la pagina de detalle de la moto.
import { useState, useEffect } from "react";

export default function MotoDetail() {
  const [moto, setMoto] = useState(null); // Estado para la moto
  const [isLoading, setIsLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error
  const { nombre } = useParams();


  
  useEffect(() => {
    const obtenerMotoPorNombre = async () => {
      try {
        setIsLoading(true); // Iniciar la carga
        const response = await axios.get(
          `http://localhost:8081/api/motos/nombre/${nombre}`
        ); // Llamada a la API
        setMoto(response.data); // Guardar la moto obtenida
      } catch (error) {
        console.error("Error al obtener la moto:", error);
        setError("Error al obtener la moto"); // Manejar error
      } finally {
        setIsLoading(false); // Finalizar la carga
      }
    };
    obtenerMotoPorNombre();
  }, [nombre]);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);
  const [activeSection, setActiveSection] = useState("motor");

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Verifica si hay algún error al obtener la moto
  if (error) {
    return <div>{error}</div>;
  }

  // Verifica si la moto está cargando o si no se encontró
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!moto) {
    return <div>Moto no encontrada.</div>;
  }

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const infoContent = (
    <>
      <p className="modelo">
        {moto?.modeloMoto} - {moto?.anioFabricacion}
      </p>
      <p className="descripcion-moto">{moto?.descripcionMoto}</p>
      <p className="precio">USD {moto?.precioDolares} mil dolares</p>
      <p className="precio-soles">S/ {moto?.precioSoles} mil soles</p>
      <Link to="/comprar" className="btn btnquiero mt-3">
        Quiero esta moto
      </Link>
    </>
  );

  const renderSectionContent = () => {
    switch (activeSection) {
      case "motor":
        return <EspecificacionesMotor moto={moto} />;
      case "frenos":
        return <EspecificacionesFreno moto={moto} />;
      case "aros":
        return <EspecificacionesLlantas moto={moto} />;
      case "suspension":
        return <EspecificacionesSuspension moto={moto} />;
      case "rendimiento":
        return <EspecificacionesRendimiento moto={moto} />;
      case "dimensiones":
        return <EspecificacionesDimensiones moto={moto} />;
      default:
        return <p>Selecciona una sección</p>;
    }
  };

  return (
    <>
      <div className="container-fluid position-relative" id="sectioncatalog">
        <div className="breadcrumb position-absolute">
          <p className="mt-5 pt-5 ms-5 ps-5">
            <Link to="/">Inicio</Link> / <Link to="/catalogo">Catalogo</Link> /{" "}
            {moto?.marcaMoto}
            <h1 className="titulo-moto-detalle">{moto?.nombreMoto}</h1>
          </p>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-12">
            <img
              src={moto?.urlImg}
              alt={moto?.nombreMoto}
              className="img-fluid mt-3"
              style={{ zIndex: 5 }}
              width={800}
              height={500}
            />
          </div>
          {!isSmallScreen && (
            <div className="col-lg-6 col-md-12 text-right moto-details">
              {infoContent}
            </div>
          )}
        </div>
      </div>

      {isSmallScreen && (
        <div className="container-fluid info-responsive mt-5">
          {infoContent}
        </div>
      )}

      <div className="container-fluid specs-section">
        <div className="row text-center">
          <div className="col-6 col-md-4 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-speedometer"
              viewBox="0 0 16 16"
            >
              <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z" />
              <path
                fillRule="evenodd"
                d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"
              />
            </svg>
            <p>CILINDRADA</p>
            <h2>
              {moto?.motor?.cilindrada}
              <span>cc</span>
            </h2>
          </div>
          <div className="col-6 col-md-4 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-fuel-pump-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z" />
            </svg>
            <p>RENDIMIENTO APROX. POR GALÓN</p>
            <h2>
              {moto?.combustibles?.rendimientoPorGalon}
              <span>km</span>
            </h2>
          </div>
          <div className="col-12 col-md-4 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-file-earmark-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
            </svg>
            <p>GARANTÍA</p>
            <h2>{moto?.garantiaAnios} AÑOS / 30 MIL KM</h2>
            <small>*Lo que ocurra primero</small>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h1 className="mb-5 fw-bold" id="especificaciones">
          ESPECIFICACIONES
        </h1>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-1 d-flex flex-column align-items-center sidebar-menu">
            <a
              className={`menu-item px-3 py-3 ${
                activeSection === "motor" ? "active" : ""
              }`}
              href="#motor"
              onClick={() => handleSectionClick("motor")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-lightning-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11.251 0a.5.5 0 0 1 .439.737L8.9 5H13.5a.5.5 0 0 1 .392.804l-7 9a.5.5 0 0 1-.865-.467L6.6 10H2.5a.5.5 0 0 1-.461-.68l5-10A.5.5 0 0 1 7.5 0h3.751z" />
              </svg>
              Motor
            </a>
            <a
              className={`menu-item px-3 py-3 ${
                activeSection === "frenos" ? "active" : ""
              }`}
              href="#frenos"
              onClick={() => handleSectionClick("frenos")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-exclamation-triangle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.938 2.016a.13.13 0 0 1 .125 0c.04.02.07.05.087.09L13.3 12.905c.04.082.01.178-.064.217a.147.147 0 0 1-.063.017H2.824a.145.145 0 0 1-.063-.017.138.138 0 0 1-.064-.217L7.75 2.106a.112.112 0 0 1 .087-.09zM8 1a1 1 0 0 0-.87.493L1.342 12.986A1 1 0 0 0 2.175 14h11.65a1 1 0 0 0 .832-1.514L8.87 1.493A1 1 0 0 0 8 1z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm.93-6.481a.482.482 0 1 1-.931 0 .482.482 0 0 1 .93 0z" />
              </svg>
              Frenos
            </a>
            <a
              className={`menu-item px-3 py-3 ${
                activeSection === "aros" ? "active" : ""
              }`}
              href="#aros"
              onClick={() => handleSectionClick("aros")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-life-preserver"
                viewBox="0 0 16 16"
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m6.43-5.228a7.03 7.03 0 0 1-3.658 3.658l-1.115-2.788a4 4 0 0 0 1.985-1.985zM5.228 14.43a7.03 7.03 0 0 1-3.658-3.658l2.788-1.115a4 4 0 0 0 1.985 1.985zm9.202-9.202-2.788 1.115a4 4 0 0 0-1.985-1.985l1.115-2.788a7.03 7.03 0 0 1 3.658 3.658m-8.087-.87a4 4 0 0 0-1.985 1.985L1.57 5.228A7.03 7.03 0 0 1 5.228 1.57zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
              Llantas
            </a>
            <a
              className={`menu-item px-3 py-3 ${
                activeSection === "suspension" ? "active" : ""
              }`}
              href="#suspension"
              onClick={() => handleSectionClick("suspension")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-reception-4"
                viewBox="0 0 16 16"
              >
                <path d="M0 0h1v16H0V0zm2 5h1v11H2V5zm3 3h1v8H5V8zm3 3h1v5H8v-5zm3 2h1v3h-1v-3z" />
              </svg>
              Suspensión
            </a>
            <a
              className={`menu-item px-3 py-3 ${
                activeSection === "rendimiento" ? "active" : ""
              }`}
              href="#rendimiento"
              onClick={() => handleSectionClick("rendimiento")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-fuel-pump-fill"
                viewBox="0 0 16 16"
              >
                <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z" />
              </svg>
              Rendimiento
            </a>
            
            <a
              className={`menu-item px-3 py-3 ${
                activeSection === "dimensiones" ? "active" : ""
              }`}
              href="#dimensiones"
              onClick={() => handleSectionClick("dimensiones")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-rulers"
                viewBox="0 0 16 16"
              >
                <path d="M1 2v12h12V2H1zm1 1h10v10H2V3zm2 1v1h1V4H4zm0 2v1h1V6H4zm0 2v1h1V8H4zm0 2v1h1v-1H4zm2-6v1h1V4H6zm0 2v1h1V6H6zm0 2v1h1V8H6zm0 2v1h1v-1H6zm2-6v1h1V4H8zm0 2v1h1V6H8zm0 2v1h1V8H8zm0 2v1h1v-1H8zm2-6v1h1V4h-1zm0 2v1h1V6h-1zm0 2v1h1V8h-1zm0 2v1h1v-1h-1z" />
              </svg>
              Dimensiones
            </a>
          </div>
          <div className="col-11">
            <div className="section-content mt-4">{renderSectionContent()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
