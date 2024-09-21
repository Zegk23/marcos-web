import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import motos from "../data/motos";
import MotoCard from "../components/MotoCard";
import "../stylesPages/styleCatalog.css";

export default function CatalogPage() {
  const [marca, setMarca] = useState("todas");
  const [modelo, setModelo] = useState("todos");
  const [anio, setAnio] = useState("");
  const [precio, setPrecio] = useState(100000); 

  // Funciones para manejar cambios en los filtros
  const handleMarcaChange = (e) => setMarca(e.target.value);
  const handleModeloChange = (e) => setModelo(e.target.value);
  const handleAnioChange = (e) => setAnio(e.target.value);
  const handlePrecioChange = (e) => setPrecio(e.target.value);

  // Método de filtrado
  const filtrarMotos = () => {
    const motosFiltradas = motos.filter((moto) => {
      const cumpleMarca =
        marca === "todas" || moto.marca.toLowerCase() === marca.toLowerCase();
      const cumpleModelo =
        modelo === "todos" || moto.modelo.toLowerCase() === modelo.toLowerCase();
      const cumpleAnio = anio === "" || moto.año.toString() === anio;
      const cumplePrecio =
        moto.precioDolares >= 5000 && moto.precioDolares <= precio;

      return cumpleMarca && cumpleModelo && cumpleAnio && cumplePrecio;
    });

    console.log("Motos filtradas:", motosFiltradas); 
    return motosFiltradas;
  };

  return (
    <>
      {/* Título de la sección */}
      <div className="container-fluid" id="sectioncatalogo">
        <div className="container text-center my-5 content-center">
          <div className="main-heading" id="text">
            Catálogo de Motos
          </div>
          <div className="sub-heading" id="text2">
            <strong>Descubre nuestra amplia gama de motocicletas</strong>
          </div>
        </div>
      </div>

      {/* Botón para mostrar el filtro en pantallas pequeñas */}
      <div className="container-fluid my-5">
        <button
          className="btn btn-danger d-lg-none mb-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#filtroMotos"
          aria-expanded="false"
          aria-controls="filtroMotos"
        >
          Filtrar Motos
        </button>

        <div className="row">
          {/* Filtro */}
          <div
            id="filtroMotos"
            className="col-12 col-lg-3 mb-4 collapse d-lg-block"
          >
            <div className="filtro">
              <h4 className="mb-3">Filtrar Motos</h4>

              {/* Marca */}
              <div className="mb-3">
                <label htmlFor="marca" className="form-label">
                  Marca
                </label>
                <select
                  id="marca"
                  className="form-select"
                  value={marca}
                  onChange={handleMarcaChange}
                >
                  <option value="todas">Todas</option>
                  <option value="yamaha">Yamaha</option>
                  <option value="hyundai">Hyundai</option>
                  <option value="ducati">Ducati</option>
                  <option value="kawasaki">Kawasaki</option>
                  <option value="Suzuki">Suzuki</option>
                  <option value="Honda">Honda</option>
                </select>
              </div>

              {/* Modelo */}
              <div className="mb-3">
                <label htmlFor="modelo" className="form-label">
                  Modelo
                </label>
                <select
                  id="modelo"
                  className="form-select"
                  value={modelo}
                  onChange={handleModeloChange}
                >
                  <option value="todos">Todos</option>
                  <option value="scooter">Scooter</option>
                  <option value="urbano">Urbano</option>
                  <option value="multipropositos">Multipropositos</option>
                  <option value="trabajo">Trabajo</option>
                  <option value="deportivo">Deportivo</option>
                </select>
              </div>

              {/* Año */}
              <div className="mb-3">
                <label htmlFor="anio" className="form-label">
                  Año
                </label>
                <input
                  type="number"
                  id="anio"
                  className="form-control"
                  placeholder="Año"
                  value={anio}
                  onChange={handleAnioChange}
                />
              </div>

              {/* Precio */}
              <div className="mb-3">
                <label htmlFor="precio" className="form-label">
                  Precio Máximo (USD)
                </label>
                <input
                  type="range"
                  className="form-range"
                  min="20000"
                  max="100000"
                  id="precio"
                  value={precio}
                  onChange={handlePrecioChange}
                />
                <output id="precio-output" className="form-text">
                  {precio}
                </output>
              </div>
            </div>
          </div>

          {/* Lista de motos filtradas */}
          <div className="col-12 col-lg-9">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {filtrarMotos().length > 0 ? (
                filtrarMotos().map((moto, index) => (
                  <MotoCard key={index} moto={moto} />
                ))
              ) : (
                <p>No se encontraron motos con los filtros seleccionados.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
