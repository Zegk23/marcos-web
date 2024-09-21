import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';	
import '../stylesComponents/StyleFooter.css';
import Logo from '../imgs/eHS-1ebx4o_2J-JNS61v8-transformed.webp';
export default function Footer() {
  return (
<footer class="footer">
        <div class="container">
            <div class="row">

                {/* <!-- Explora --> */}
                <div class="col-md-3">
                    <h5>Explora</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Modelos de Motos</a></li>
                        <li><a href="#">Accesorios</a></li>
                        <li><a href="#">Eventos y Promociones</a></li>
                        <li><a href="#">Reseñas y Comparativas</a></li>
                    </ul>
                </div>
                {/* <!-- Servicios --> */}
                <div class="col-md-3">
                    <h5>Servicios</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Venta de Motos</a></li>
                        <li><a href="#">Taller de Reparaciones</a></li>
                        <li><a href="#">Accesorios y Repuestos</a></li>
                        <li><a href="#">Financiamiento</a></li>
                    </ul>
                </div>
                {/* <!-- Soporte --> */}
                <div class="col-md-3">
                    <h5>Soporte</h5>
                    <ul class="list-unstyled">
                        <li><a href="#">Centro de Ayuda</a></li>
                        <li><a href="#">Garantía y Devoluciones</a></li>
                        <li><a href="#">Atención al Cliente</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                    </ul>
                </div>
                {/* <!-- Contacto --> */}
                <div class="col-md-3">
                    <h5>Contacto</h5>
                    <ul class="list-unstyled">
                        <li><a href="#"><i class="bi bi-geo-alt"></i> Av. Las Motos 123, Lima, Perú</a></li>
                        <li><a href="mailto:contacto@motos.com"><i class="bi bi-envelope"></i> contacto@motos.com</a>
                        </li>
                        <li><a href="tel:+51987654321"><i class="bi bi-phone"></i> +51 987 654 321</a></li>
                        <li><a href="tel:+51987654322"><i class="bi bi-phone"></i> +51 987 654 322</a></li>
                    </ul>
                </div>
            </div>

            <div class="col-md-1" id="logo-footer">
                <img src={Logo} alt="logo" width="50" height="50"/>
            </div>

            <div class="row text-center copyright">
                <div class="col-12">
                    <p>&copy; 2024 Todos los derechos reservados <a href="#">Mass Motos</a></p>
                </div>
            </div>
        </div>
    </footer>
  )
}
