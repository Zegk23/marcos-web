import '../stylesComponents/StylesEspecificaciones.css';

export default function EspecificacionesLlantas({ moto }) {
  // Verifica que el objeto "neumaticos" dentro de "moto" esté definido, de lo contrario, usa valores predeterminados.
  const neumaticos = moto?.neumaticos ?? {};
  const neumaticoDelantero = neumaticos.neumaticoDelantero ?? 'No disponible';
  const neumaticoTrasero = neumaticos.neumaticoTrasero ?? 'No disponible';
  const aroDelantero = neumaticos.aroDelantero ?? 'No disponible';
  const aroTrasero = neumaticos.aroTrasero ?? 'No disponible';

  return (
    <>
      <h2 className="text-start fw-bold fs-1 ms-4" id='title'>AROS Y LLANTAS</h2>
      <div className="container">
        <div className="row mt-4 ms-3">
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Neumático Delantero
            <div id='number'>
              {neumaticoDelantero}
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Neumático Posterior
            <div id='number'>
              {neumaticoTrasero}
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Aro Delantero
            <div id='number'>
              {aroDelantero}
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Aro Posterior
            <div id='number'>
              {aroTrasero}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
