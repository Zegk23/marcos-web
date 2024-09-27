import '../stylesComponents/StylesEspecificaciones.css';
export default function EspecificacionesDestacado({ moto }) {
    return (
      <>
        <h2 className="text-start fw-bold fs-1 ms-4" id="title">DESTACADOS</h2>
        <div className="container">
          <div className="row mt-4 ms-3">
            {/* Colores disponibles */}
            <div className="col-6 fw-bold fs-3" id="subtitle">
              Colores Disponibles
              <div id="content">
                {moto.color && moto.color.length > 0 ? (
                  <ul className="ps-0 fw-normal fs-5" id="content">
                    {moto.color.map((item, index) => (
                      <li key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="16"
                          fill="currentColor"
                          className="bi bi-check-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No hay información del color disponible</p>
                )}
              </div>
            </div>
  
            {/* Tablero */}
            <div className="col-6 fw-bold fs-3" id="subtitle">
              Tablero
              <div >
                {moto.tablero && moto.tablero.length > 0 ? (
                  <ul className="ps-0 fw-normal fs-5" id="content">
                    {moto.tablero.map((item, index) => (
                      <li key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="16"
                          fill="currentColor"
                          className="bi bi-check-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No hay información del tablero disponible</p>
                )}
              </div>
            </div>
  
            {/* Accesorios incluidos */}
            <div className="col-6 fw-bold fs-3" id="subtitle">
              Accesorios Incluidos
              <div>
                {moto.accesoriosIncluidos && moto.accesoriosIncluidos.length > 0 ? (
                  <ul className="ps-0 fw-normal fs-5" id="content">
                    {moto.accesoriosIncluidos.map((item, index) => (
                      <li key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="16"
                          fill="currentColor"
                          className="bi bi-check-circle-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No hay información de accesorios disponibles</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  