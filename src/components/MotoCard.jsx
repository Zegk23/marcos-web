import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../stylesComponents/stylesProductsCards.css';
import {Link} from 'react-router-dom';
const MotoCard = ({ moto }) => {
  return (
    <div className="col">
      <div className="moto-card">
        <div className="badge badge-nueva">{moto.estado.toUpperCase()}</div>
        <img src={moto.imagen} className="card-img-top" alt={moto.nombre} />
        <div className="badge badge-cc">{moto.cilindrada}CC</div>
        <div className="card-body">
          <h5 className="card-title">{moto.nombre}</h5>
          <p className="card-text">
            Marca: {moto.marca} <br />
            Precio desde <strong>USD ${moto.precioDolares}</strong> o <strong>S/ {moto.precioSoles} mil soles</strong>
          </p>
          <Link to={`/moto/${moto.nombre}`} className="btn-conoce-mas">
            CONOCE MÁS
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default MotoCard;