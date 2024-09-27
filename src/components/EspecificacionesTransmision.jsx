import '../stylesComponents/StylesEspecificaciones.css';
export default function EspecificacionesTransmision({ moto }) {
  return (
    <>
      <h1 className="text-start fw-bold fs-1 ms-4">TRANSMISION</h1>
      <div className="container">
        <div className="row mt-4 ms-3">
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Transmision
            <div id='content'>{moto.transmision}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Nro. Cambios
            <div id='number'>{moto.numeroDeCambios}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Velocidad Maxima
            <div id='number'>{moto.velocidadMaxima}</div>
          </div>
        </div>
      </div>
    </>
  );
}
