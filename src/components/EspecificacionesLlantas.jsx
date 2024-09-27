import '../stylesComponents/StylesEspecificaciones.css';
export default function EspecificacionesLlantas({moto}) {
  return (
    <>
      <h2 className="text-start fw-bold fs-1 ms-4" id='title'>AROS Y LLANTAS</h2>
      <div className="container">
        <div className="row mt-4 ms-3">
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Neumatico Delantero
            <div id='number'>
              {moto.neumaticoDelantero} 
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Neumatico Posterior
            <div id='number'>
              {moto.neumaticoTrasero} 
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Aro Delantero
            <div id='number'>
              {moto.aroDelantero} 
            </div>
          </div>
          <div className="col-6 fw-bold fs-3 mb-5" id='subtitle'>
            Aro Posterior
            <div id='number'>
              {moto.aroPosterior} 
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
