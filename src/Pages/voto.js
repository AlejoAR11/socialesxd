import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/nav.js";
import style from "../Style/inicio.css";
import Footer from "../components/footer.js";
class Voto extends React.Component {
  render() {
    return (
      <div class="container-fluid fondo">
        <header>
          <Nav />
        </header>

        <div class="row">
        
          <div class="col-sm-10	col-md-10	col-lg-10	col-xl-10 contenido">
            <h2 class="titulos"> Voto</h2>
            <br />
              <br />

            <p class="texto">
            Voto: 
<a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8620#:~:text=Artículo%20258.,de%20medios%20electrónicos%20o%20informáticos."> Artículo 258. “El voto es un derecho y un deber ciudadano”.</a> 
Constitución Política de Colombia [Const].  Artículo 258 de 1994
(Colombia).
<br />
              <br />
El voto es el mecanismo por el cual los ciudadanos elegimos ya sea al presidente, gobernador, alcalde, etc de nosotros depende quien nos gobernara por un tiempo definido.
<br />
<br />     
Son cinco los pasos que se debe de hacer para poder votar (se debe ser mayor de edad):
<br /><br />
   
<ul>
<li>Saber dónde le toca votar. </li>
<li>Saber el horario en el que tiene que votar.</li>
<li>Tener la cédula de ciudadanía.</li>
<li>Marcar el tarjetón.</li>
<li>Depositar el tarjetón.</li>
</ul>
<br />
            
            </p>

            <p class="texto">

          
              </p>
          </div>
          
        </div>

<footer>
<Footer/>
</footer>

      </div>
    );
  }
}

export default Voto;
