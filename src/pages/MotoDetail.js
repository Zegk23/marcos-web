import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../stylesPages/styleMotoDetail.css";
import { useParams } from "react-router-dom";
import motos from "../data/motos";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//
export default function MotoDetail() {
  const { nombre } = useParams();
  const moto = motos.find((moto) => moto.nombre === nombre);

  // Estado para controlar si la pantalla es menor a 1000px
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

  // Actualiza el estado cuando se redimensiona la ventana
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!moto) {
    return <div>Moto no encontrada.</div>;
  }

  const infoContent = (
    <>
      <p className="modelo">
        {moto.modelo} - {moto.año}
      </p>
      <p className="descripcion-moto">{moto.descripcion}</p>
      <p className="precio">USD {moto.precioDolares}</p>
      <p className="precio-soles">S/ {moto.precioSoles}</p>
      <Link to="/comprar" className="btn btn-warning mt-3">
        Quiero esta moto
      </Link>
    </>
  );

  return (
    <>
      <div className="container-fluid position-relative" id="sectioncatalog">
        <div className="breadcrumb position-absolute">
          <p className="mt-5 pt-5 ms-5 ps-5">
            <Link to="/">Inicio</Link> / <Link to="/catalogo">Catalogo</Link> /{" "}
            {moto.marca}
            <h1 className="titulo-moto-detalle">{moto.nombre}</h1>
          </p>
        </div>
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-12">
            <img
              src={moto.imagen}
              alt={moto.nombre}
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
          <div className="col-12 col-md-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-speedometer"
              viewBox="0 0 16 16"
            >
              <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z" />
              <path
                fill-rule="evenodd"
                d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"
              />
            </svg>
            <p>CILINDRADA</p>
            <h2>
              {moto.cilindrada}
              <span>cc</span>
            </h2>
          </div>
          <div className="col-12 col-md-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-fuel-pump-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8a2 2 0 0 1 2 2v.5a.5.5 0 0 0 1 0V8h-.5a.5.5 0 0 1-.5-.5V4.375a.5.5 0 0 1 .5-.5h1.495c-.011-.476-.053-.894-.201-1.222a.97.97 0 0 0-.394-.458c-.184-.11-.464-.195-.9-.195a.5.5 0 0 1 0-1q.846-.002 1.412.336c.383.228.634.551.794.907.295.655.294 1.465.294 2.081V7.5a.5.5 0 0 1-.5.5H15v4.5a1.5 1.5 0 0 1-3 0V12a1 1 0 0 0-1-1v4h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1zm2.5 0a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5z" />
            </svg>
            <p>RENDIMIENTO APROX. POR GALÓN</p>
            <h2>
              {moto.rendimientoPorGalo}
              <span>km</span>
            </h2>
          </div>
          <div className="col-12 col-md-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-file-earmark-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
            </svg>
            <p>GARANTÍA</p>
            <h2>{moto.garantia} / 30 MIL KM</h2>
            <small>*Lo que ocurra primero</small>
          </div>
        </div>
      </div>
    </>
  );
}
