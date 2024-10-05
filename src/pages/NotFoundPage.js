import React from "react";
import { Link } from "react-router-dom";
import "../stylesPages/styleNotFound.css"; 

export default function NotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="not-found-text">
        <h1 className="error-code">
          <span className="error-404">404</span> ERROR
        </h1>
        <h2 className="oh-no">
          OH NO! <span className="okay-text">Pero, esta bien!</span>
        </h2>
        <p className="description">
          Incluso las personas interesantes se pierden en algún momento, y hoy
          es tu punto. No te preocupes, encontrarás el camino de regreso.
        </p>
        <Link to="/" className="btn btn-home">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
