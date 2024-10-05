import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../stylesComponents/stylesProductsCards.css";
import { Link } from "react-router-dom";

const MotoCard = ({ moto }) => {
  // Asegurarnos de que las propiedades existen antes de usarlas
  const estado = moto?.estado ? moto.estado.toUpperCase() : "Desconocido";
  const nombre = moto?.nombre || "Nombre no disponible";
  const marca = moto?.marca || "Marca no disponible";
  const cilindrada = moto?.cilindrada ? `${moto.cilindrada}CC` : "Cilindrada no disponible";
  const precioDolares = moto?.precioDolares || "No disponible";
  const precioSoles = moto?.precioSoles || "No disponible";
  const imagen = moto?.imagen || "https://via.placeholder.com/300x200?text=No+Image";
  
  return (
    <div className="col">
      <div className="moto-card">
        {/* Validar que 'estado' no sea undefined */}
        <div className="badge badge-nueva">{estado}</div>
        {/* Imagen con placeholder si no hay imagen disponible */}
        <img src={imagen} className="card-img-top" alt={nombre} />
        {/* Validar cilindrada */}
        <div className="badge badge-cc">{cilindrada}</div>
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">
            Marca: {marca} <br />
            Precio desde <strong>USD ${precioDolares}</strong> o <strong>S/ {precioSoles} mil soles</strong>
          </p>
          {/* Enlace para conocer más sobre la moto */}
          <Link to={`/moto/${nombre}`} className="btn-conoce-mas">
            CONOCE MÁS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MotoCard;
