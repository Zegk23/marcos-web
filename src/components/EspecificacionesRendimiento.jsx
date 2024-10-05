import '../stylesComponents/StylesEspecificaciones.css';

export default function EspecificacionesRendimiento({ moto }) {
  // Verifica que el objeto "combustibles" dentro de "moto" esté definido, de lo contrario, usa valores predeterminados.
  const combustibles = moto?.combustibles ?? {};
  const octanaje = combustibles.octanaje ?? 'No disponible';
  const sistemaDeCombustible = combustibles.sistemaCombustible ?? 'No disponible';
  const capacidadTanque = combustibles.capacidadDeTanque ?? 'No disponible';
  const autonomia = combustibles.autonomia ?? 'No disponible';
  const rendimientoPorGalon = combustibles.rendimientoPorGalon ?? 'No disponible';

  return (
    <>
      <h1 className="text-start fw-bold fs-1 ms-4" id='title'>CONSUMO Y RENDIMIENTO</h1>
      <div className="container">
        <div className="row mt-4 ms-3">
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Octanaje
            <div id='number'>{octanaje}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Sistema de Combustible
            <div id='content'>{sistemaDeCombustible}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Capacidad de Tanque
            <div id='number'>{capacidadTanque} <span>litros</span></div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Autonomía
            <div id='number'>{autonomia} <span>km</span></div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Rendimiento por Galón
            <div id='number'>{rendimientoPorGalon} <span>km/galón</span></div>
          </div>
        </div>
      </div>
    </>
  );
}
