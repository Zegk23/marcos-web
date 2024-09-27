import '../stylesComponents/StylesEspecificaciones.css';
export default function EspecificacionesMotor({ moto }) {
  return (
    <>
      <h2 className="text-start fw-bold fs-1 ms-4" id='title'>MOTOR Y SISTEMA ELECTRICO</h2>
      <div className="container">
        <div className="row mt-4 ms-3">
          <div className='col-6 fw-bold fs-3 mb-5' id='subtitle'>
            Cilindrada
            <div>
              <div className="ps-0 fw-normal fs-3"id='number'>{moto.cilindrada} <span>cc</span></div> 
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Nro. Cilindros
            <div className="ps-0 fw-normal fs-5" id='number'>{moto.numeroCilindros}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Potencia
            <div className="ps-0 fw-normal fs-5" id='number'>{moto.potencia}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Torque
            <div className="ps-0 fw-normal fs-5" id='number'>{moto.torque}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Sistema de Enfriamiento
            <div className="ps-0 fw-normal fs-5" id='content'>{moto.sistemaDeEnfriamiento}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5"id='subtitle'>
            Sistema de Encendido
            <div className="ps-0 fw-normal fs-5" id='content'>{moto.sistemaDeEncendido}</div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Sistema de Arranque
            <div className="ps-0 fw-normal fs-5" id='content'>{moto.sistemaDeArranque}</div>
          </div>
        </div>
      </div>
    </>
  );
}
