import '../stylesComponents/StylesEspecificaciones.css';
export default function EspecificacionesRendimiento({ moto }) {
  return (
    <>
      <h1 className="text-start fw-bold fs-1 ms-4" id='title'>CONSUMO Y RENDIMIENTO</h1>
      <div className="container">
        <div className="row mt-4 ms-3">
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Octanaje
            <div id='number'>{moto.octanaje}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Sistema de Combustible
            <div id='content'>{moto.sistemaDeCombustible}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Capacidad de Tanque
            <div id='number'>{moto.capacidadTanque}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Autonomia
            <div id='number'>{moto.autonomia}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Rendimiento por Galon
            <div id='number'>{moto.rendimientoPorGalon}</div>
          </div>
        </div>
      </div>
    </>
  );
}
