import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../stylesPages/styleAbout.css";

// Import de las Imagenes

import growBetterImg from "../imgs/grow-better.webp";
import ourStoryImg from "../imgs/our-story.webp";
import sucursalImg from "../imgs/sucursal.webp";
import employeeImg from "../imgs/employee.webp";
import clienteImg from "../imgs/cliente.webp";

export default function AboutPage() {
  return (
    <>
      <div className="container-fluid" id="sectionbg">
        <div className="container text-center my-5 content-center">
          <div className="main-heading" id="text">
            Nosotros
          </div>

          <div className="sub-heading" id="text2">
            <strong>Para exploradores de lo nuevo</strong>
          </div>
        </div>
      </div>

      <main>
        <div className="container content-section">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <img
                src={growBetterImg}
                alt="Grow Better"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12 text-section my-3">
              <h2>Nuestra Misión:</h2>
              <p>
                Nuestra misión en Mass Motos Perú es proporcionar a nuestros
                clientes vehículos de alta calidad que no solo satisfagan sus
                necesidades de transporte, sino que también ofrezcan una
                experiencia de conducción excepcional. Creemos en la innovación
                continua y en la mejora de nuestros productos para asegurar que
                cada moto que entregamos es una combinación perfecta de estilo,
                potencia y seguridad.
              </p>
            </div>
          </div>
        </div>

        <div className="container content-section">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12 order-lg-2 order-md-2">
              <img
                src={ourStoryImg}
                alt="Our Story"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12 text-section my-3">
              <h2>Nuestra Historia:</h2>
              <p>
                Mass Motos Perú comenzó su viaje en 2010 con una visión clara:
                revolucionar el mercado de las motocicletas en Perú. Desde
                nuestros humildes comienzos en un pequeño taller, hemos crecido
                hasta convertirnos en un nombre de confianza en la industria,
                conocido por la calidad de nuestras motos y el compromiso con la
                satisfacción del cliente. A lo largo de los años, hemos
                expandido nuestra línea de productos y servicios, siempre
                manteniendo la misma pasión y dedicación que nos impulsaron
                desde el principio. Hoy, Mass Motos Perú continúa liderando el
                camino en innovación y excelencia, siempre al servicio de
                nuestros leales clientes.
              </p>
            </div>
          </div>
        </div>
      </main>

      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-5">Mass Motos en Cifras</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 my-2">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <img
                    src={sucursalImg}
                    alt="Sucursales"
                    className="mb-3 img-fluid"
                  />
                  <h5 className="card-title">12 Sucursales</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-2">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <img
                    src={employeeImg}
                    alt="Empleados"
                    className="mb-3 img-fluid"
                  />
                  <h5 className="card-title">500+ Empleados</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mx-auto my-2">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <img
                    src={clienteImg}
                    alt="Clientes"
                    className="mb-3 img-fluid"
                  />
                  <h5 className="card-title">20,000+ Clientes</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
