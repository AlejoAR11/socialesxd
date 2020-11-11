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
             
Son cinco los pasos que se debe de hacer para poder votar (se debe ser mayor de edad):
<br /><br />
   
<ul>Saber dónde le toca votar.</ul>
<ul>Saber el horario en el que tiene que votar.</ul>
<ul>Tener la cédula de ciudadanía.</ul>
<ul>Marcar el tarjetón.</ul>
<ul>Depositar el tarjetón.</ul>
<br /><br />

Uno de los hechos curiosos sobre el voto en Colombia es el que sucedió en  Socorro (Santander) Se trata que fue el único municipio del  país en el que solo estuvieron postuladas mujeres para la alcaldía, algo nunca visto.

              <br />
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
