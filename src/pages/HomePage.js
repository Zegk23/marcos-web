import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../stylesPages/styles.css";
// Import de las Imagenes
import img1 from "../imgs/img1.webp";
import img2 from "../imgs/img2.webp";
import img3 from "../imgs/img3.webp";
import card1 from "../imgs/card1.webp";
import card2 from "../imgs/card2.webp";
import card3 from "../imgs/card3.webp";
import scooter from "../imgs/scooter.webp";
import urbano from "../imgs/urbano.webp";
import multiproposito from "../imgs/multiproposito.webp";
import trabajo from "../imgs/trabajo.webp";
import tiendasIcon from "../imgs/tiendas-icon.webp";
import repuestosIcon from "../imgs/repuestos-icon.webp";

export default function HomePage() {
  return (
    <div>
      {/* Carousel */}
      <div
        id="hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img src={img1} className="d-block w-100 c-img" alt="Slide 1" />
            <div className="carousel-caption top-0 mt-4">
              <p className="mt-5 fs-3 text-uppercase">
                Descubre un Nuevo Nivel de Libertad
              </p>
              <h1 className="display-1 fw-bolder text-capitalize">
                Explora con Estilo y Potencia
              </h1>
              <button
                className="btn px-4 py-2 fs-5 mt-5"
                style={{ backgroundColor: "#d32f2f", color: "white" }}
                id="btn-carousel"
              >
                <a href="templates/catalogo.html" className="btn-link">
                  Ver Catalogo
                </a>
              </button>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src={img2} className="d-block w-100 c-img" alt="Slide 2" />
            <div className="carousel-caption top-0 mt-4">
              <p className="text-uppercase fs-3 mt-5">
                Diseño y Tecnología a tu Alcance
              </p>
              <p className="display-1 fw-bolder text-capitalize">
                Conduce la Moto de tus Sueños
              </p>
              <button
                className="btn px-4 py-2 fs-5 mt-5"
                data-bs-toggle="modal"
                data-bs-target="#booking-modal"
                style={{ backgroundColor: "#d32f2f", color: "white" }}
                id="btn-carousel"
              >
                <a href="templates/catalogo.html" className="btn-link">
                  Conoce Más
                </a>
              </button>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src={img3} className="d-block w-100 c-img" alt="Slide 3" />
            <div className="carousel-caption top-0 mt-4">
              <p className="text-uppercase fs-3 mt-5">
                Seguridad y Confort en Cada Kilómetro
              </p>
              <p className="display-1 fw-bolder text-capitalize">
                Viaja con Confianza
              </p>
              <button
                className="btn  px-4 py-2 fs-5 mt-5"
                data-bs-toggle="modal"
                data-bs-target="#booking-modal"
                style={{ backgroundColor: "#d32f2f", color: "white" }}
                id="btn-carousel"
              >
                <a href="templates/catalogo.html" className="btn-link">
                  Explorar Opciones
                </a>
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container text-center my-5">
        {/* <!-- Badge --> */}
        <div class="badge-outline">Respaldo</div>

        {/* <!-- Main Heading --> */}
        <div class="main-heading text-dark">Con Mass Motos</div>

        {/* <!-- Sub Heading --> */}
        <div class="sub-heading highlight-text text-danger">Rueda Inteligente.</div>
    </div>

      {/* Cards */}
      <div className="container my-5">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="card card-custom card-white">
              <div className="card-body position-relative">
                <i className="bi bi-award card-icon bg-danger p-2 rounded-circle"></i>
                <img src={card1} className="img-fluid mb-3" alt="Imagen 1" />
                <div className="card-title">10</div>
                <div className="card-subtitle">Años de excelencia.</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-custom card-red">
              <div className="card-body position-relative">
                <i className="bi bi-motorcycle card-icon bg-dark p-2 rounded-circle"></i>
                <img src={card2} className="img-fluid mb-3" alt="Imagen 2" />
                <div className="card-title">+ de 15</div>
                <div
                  className="card-subtitle"
                  style={{ color: "white !important" }}
                >
                  Millones de motocicletas vendidas.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-custom card-white">
              <div className="card-body position-relative">
                <i className="bi bi-globe card-icon bg-danger p-2 rounded-circle"></i>
                <img src={card3} className="img-fluid mb-3" alt="Imagen 3" />
                <div className="card-title">Garantía</div>
                <div className="card-subtitle">
                  La mejor y más extensa del mercado.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modelos --> */}
    <div class="container text-start my-5">
        {/* <!-- Badge --> */}
        <div class="badge-outline">Modelos</div>

        {/* <!-- Main Heading --> */}
        <div class="main-heading text-dark">Sin importar cuál sea el reto, siempre</div>

        {/* <!-- Sub Heading --> */}
        <div class="main-heading highlight-text text-danger">habra una moto a tu medida</div>
    </div>


      {/* Moto Cards */}
      <div className="container-fluid my-5">
        <div className="row g-3">
          <div className="col-6 col-md-3">
            <div className="moto-cardModelos">
              <img src={scooter} className="moto-card-img-top" alt="Modelo 1" />
              <div className="moto-card-body">
                <h5 className="moto-card-title">Scooter</h5>
                <p className="moto-card-text">
                  La mejor solución de movilidad para todos.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="moto-cardModelos">
              <img src={urbano} className="moto-card-img-top" alt="Modelo 2" />
              <div className="moto-card-body">
                <h5 className="moto-card-title">Urbano</h5>
                <p className="moto-card-text">
                  El futuro a tu alcance, siempre disponible.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="moto-cardModelos">
              <img
                src={multiproposito}
                className="moto-card-img-top"
                alt="Modelo 3"
              />
              <div className="moto-card-body">
                <h5 className="moto-card-title">Multipropositos</h5>
                <p className="moto-card-text">
                  Una aventura cada día, en cualquier terreno
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="moto-cardModelos">
              <img src={trabajo} className="moto-card-img-top" alt="Modelo 4" />
              <div className="moto-card-body">
                <h5 className="moto-card-title">Trabajo</h5>
                <p className="moto-card-text">
                  Indestructible, tan fuerte como tu trabajo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Garantía y Sección de Tiendas/Repuestos */}
      <div className="container-fluid text-center" id="section">
        {/* Badge */}
        <div
          className="badge-outline my-5"
          style={{
            border: "2px solid rgb(255, 255, 255)",
            color: "rgb(255, 255, 255)",
          }}
        >
          Garantía
        </div>
        {/* Main Heading */}
        <div className="main-heading" style={{ color: "white" }}>
          Cuenta con <span className="highlight-text">3 años o 30.000KM</span>
        </div>
        <span className="main-heading highlight-text">de garantía, </span>
        <div className="main-heading" style={{ color: "white" }}>
          la más extensa del mercado.
        </div>

        <button
          className="btn px-4 py-2 fs-5  mt-2 mb-5"
          style={{ backgroundColor: "#d32f2f", color: "white" }}
        >
          Ver Modelos
        </button>

        <div className="container mb-5">
          <div className="row">
            {/* Card Tiendas y Talleres */}
            <div className="col-md-6 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon">
                    <img src={tiendasIcon} alt="Tiendas Icono" />
                  </div>
                  <h5 className="card-title">Tiendas y talleres</h5>
                  <p className="card-text">
                    Conoce nuestra amplia red de distribuidores. Siempre puede
                    haber uno cerca de ti.
                  </p>
                  <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#modalTiendasTalleres"
                  >
                    Más Información
                  </button>
                </div>
              </div>
            </div>

            {/* Card Repuestos */}
            <div className="col-md-6 mb-5">
              <div className="card h-100">
                <div className="card-body">
                  <div className="icon">
                    <img src={repuestosIcon} alt="Repuestos Icono" />
                  </div>
                  <h5 className="card-title">Repuestos</h5>
                  <p className="card-text">
                    Para que nunca te detengas, tenemos repuestos y accesorios
                    100% disponibles.
                  </p>
                  <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#modalRepuestos"
                  >
                    Más Información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Tiendas y Talleres */}
        <div
          className="modal fade"
          id="modalTiendasTalleres"
          tabindex="-1"
          aria-labelledby="modalTiendasTalleresLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTiendasTalleresLabel">
                  Tiendas y Talleres
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Conoce nuestra amplia red de distribuidores. Siempre puede
                  haber uno cerca de ti. Contamos con más de 50 puntos de venta
                  a nivel nacional, ofreciendo siempre el mejor servicio y
                  atención personalizada.
                </p>
                <p>
                  ¡Visítanos en nuestras sucursales y descubre todas las
                  opciones que tenemos para ti!
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Repuestos */}
        <div
          className="modal fade"
          id="modalRepuestos"
          tabindex="-1"
          aria-labelledby="modalRepuestosLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalRepuestosLabel">
                  Repuestos
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Para que nunca te detengas, tenemos repuestos y accesorios
                  100% disponibles. Desde piezas de motor hasta accesorios de
                  personalización, todo lo que necesitas está aquí.
                </p>
                <p>
                  Garantizamos la disponibilidad de nuestros productos con la
                  mejor calidad y respaldo.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
