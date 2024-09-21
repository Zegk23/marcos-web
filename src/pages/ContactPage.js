import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../stylesPages/stylesContact.css";

export default function ContactPage() {
  return (
    <>
      <div className="container-fluid" id="sectionbgc">
        <div className="container text-center my-5 content-center">
          {/* Main Heading */}
          <div className="main-heading" id="text">
            Contacto
          </div>

          {/* Sub Heading */}
          <div className="sub-heading" id="text2">
            <strong>Conéctate con nosotros para cualquier consulta</strong>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4">Formulario de Contacto</h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa tu correo electrónico"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
            <input
              type="tel"
              className="form-control"
              id="telefono"
              placeholder="Ingresa tu número de teléfono"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="mensaje"
              rows="4"
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-danger btn-block">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
