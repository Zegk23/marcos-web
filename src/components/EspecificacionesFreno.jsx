import '../stylesComponents/StylesEspecificaciones.css';

export default function EspecificacionesFreno({ moto }) {
  const frenos = moto?.frenos ?? {}; // Asegura que `frenos` esté definido.
  const frenoDelantero = frenos.frenoDelantero ?? 'No disponible';
  const frenoTrasero = frenos.frenoTrasero ?? 'No disponible';

  return (
    <>
      <h2 className="text-start fw-bold fs-1 ms-4" id='title'>FRENOS</h2>
      <div className="container">
        <div className="row mt-4 ms-3">
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Freno Delantero
            <div className="ps-0 fw-normal fs-5" id='number'>
              {frenoDelantero} <span>mm.</span>
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Freno Posterior
            <div className="ps-0 fw-normal fs-5" id='number'>
              {frenoTrasero} <span>mm.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
