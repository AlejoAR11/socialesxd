import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/nav.js";
import Footer from "../components/footer.js";

class CabildoAbierto extends React.Component {
  render() {
    return (
      <div class="container-fluid fondo">
        <header>
          <Nav />
        </header>

        <div class="row">
          <div class="col-sm-10	col-md-10	col-lg-10	col-xl-10 contenido">
            <h2 class="titulos"> Cabildo Abierto</h2>
            <br />
            <br />

            <p class="texto">
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=330#:~:text=-%20Cabildo%20abierto.,de%20interés%20para%20la%20comunidad.">
                {" "}
                La ley 134
              </a>{" "}
              El cabildo abierto es la reunión pública de los concejos
              distritales, municipales o de las juntas administradoras locales,
              en la cual los habitantes pueden participar directamente con el
              fin de discutir asuntos de interés para la comunidad.
              <br />
              <br />
              Esta es una reunión las cuales se reúnen los administrativos con
              los habitantes para participar activamente sobre temas de interés.
              <br />
              <br />
              La solicitud de un cabildo abierto debe ser iniciativa de un
              número de personas no inferior al 5 por 1000 del censo electoral
              del lugar (municipio, departamento).
              <br />
              <br />
              En Honda, Tolima hubo un cabildo abierto sobre Políticas Públicas
              de la Infancia y la Adolescencia el cual fue aprobado el
              14/08/2013 B. (1991, julio).{" "}
              <a href="https://www.constitucioncolombia.com/titulo-9/capitulo-1/articulo-258"> ConstitucionColombia.com.</a>{" "}
             
              <br />
              <br />
            </p>

            <p class="texto"></p>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default CabildoAbierto;
