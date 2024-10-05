import '../stylesComponents/StylesEspecificaciones.css';

export default function EspecificacionesMotor({ moto }) {

  // Accede a las propiedades dentro de moto.motor
  const motor = moto?.motor ?? {}; 
  const cilindrada = motor.cilindrada ?? 'No disponible';
  const numeroCilindros = motor.numeroCilindros ?? 'No disponible';
  const potencia = motor.potencia ?? 'No disponible';
  const torque = motor.torque ?? 'No disponible';
  const sistemaDeEnfriamiento = motor.sistemaDeEnfriamiento ?? 'No disponible';
  const sistemaDeEncendido = motor.sistemaDeEncendido ?? 'No disponible';
  const sistemaDeArranque = motor.sistemaDeArranque ?? 'No disponible';

  return (
    <>
      <h2 className="text-start fw-bold fs-1 ms-4" id='title'>MOTOR Y SISTEMA ELÉCTRICO</h2>
      <div className="container">
        <div className="row mt-4 ms-3">
          <div className='col-6 fw-bold fs-3 mb-5' id='subtitle'>
            Cilindrada
            <div className="ps-0 fw-normal fs-3" id='number'>
              {cilindrada} <span>cc</span>
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Nro. Cilindros
            <div className="ps-0 fw-normal fs-5" id='number'>
              {numeroCilindros}
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Potencia
            <div className="ps-0 fw-normal fs-5" id='number'>
              {potencia} <span>HP</span>
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Torque
            <div className="ps-0 fw-normal fs-5" id='number'>
              {torque} <span>Nm</span>
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Sistema de Enfriamiento
            <div className="ps-0 fw-normal fs-5" id='content'>
              {sistemaDeEnfriamiento}
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Sistema de Encendido
            <div className="ps-0 fw-normal fs-5" id='content'>
              {sistemaDeEncendido}
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Sistema de Arranque
            <div className="ps-0 fw-normal fs-5" id='content'>
              {sistemaDeArranque}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
