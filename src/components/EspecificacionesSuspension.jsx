import '../stylesComponents/StylesEspecificaciones.css';
export default function EspecificacionesSuspension({ moto }) {
  return (
    <>
      <h1 className="text-start fw-bold fs-1 ms-4"id="title">SUSPENSIÓN</h1>
      <div className="container">
        <div className="row mt-4 ms-3">
          <div className="col-6 fw-bold fs-3 mb-5" id="subtitle">
            Suspension Delantera
            <div id="content">{moto.suspensionDelantera}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id="subtitle">
            Suspension Posterior
            <div id="content">{moto.suspensionTrasera}</div>
          </div>
        </div>
      </div>
    </>
  );
}
