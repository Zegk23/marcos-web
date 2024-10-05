import '../stylesComponents/StylesEspecificaciones.css';

export default function EspecificacionesSuspension({ moto }) {
  const suspensiones = moto?.suspensiones ?? {};
  const suspensionDelantera = suspensiones.suspensionDelantera ?? 'No disponible';
  const suspensionTrasera = suspensiones.suspensionTrasera ?? 'No disponible';

  return (
    <>
      <h1 className="text-start fw-bold fs-1 ms-4" id="title">SUSPENSIÓN</h1>
      <div className="container">
        <div className="row mt-4 ms-3">
          <div className="col-6 fw-bold fs-3 mb-5" id="subtitle">
            Suspensión Delantera
            <div id="content">{suspensionDelantera}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id="subtitle">
            Suspensión Posterior
            <div id="content">{suspensionTrasera}</div>
          </div>
        </div>
      </div>
    </>
  );
}
