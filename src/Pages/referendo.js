import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/nav.js";
import style from "../Style/inicio.css";
import Footer from "../components/footer.js";

class Referendo extends React.Component {
  render() {
    return (
      <div class="container-fluid fondo">
        <header>
          <Nav />
        </header>

        <div class="row">
          <div class="col-sm-10	col-md-10	col-lg-10	col-xl-10 contenido">
            <h2 class="titulos"> Referendo</h2>

            <p class="texto">
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=330.">{" "}
              Según la ley 134, Artículo 3. </a> “Es la convocatoria que se hace al
              pueblo para que apruebe o rechace un proyecto de norma jurídica o
              derogue o no una norma ya vigente.” Al igual que en el caso de las
              iniciativas legislativas o normativas, se beben seguir los
              siguientes pasos:
              <br />
              <br />
              <ul>
                Se debe construir un comité promotor y con un apoyo equivalente
                al 0.5% del censo electoral.
              </ul>
              <ul>
                Inscribir la iniciativa de referendo para proceder a recolectar
                las firmas que lo respalden que tienen que ser equivalentes al
                5% del censo electoral.
              </ul>
              <ul>Ser revisado y aprobado por el congreso.</ul>
              <br />
              Una forma de entender el funcionamiento del referendo con un
              ejemplo:
              <br />
              <br />
              Se aprueba una ley en la que aumenta la edad de pensión para todas
              las personas en 5 años. El pueblo, al ver que esta decisión va en
              contra de sus intereses rechaza esta ley y se unen bajo el
              mecanismo de referendo para reunir firmas y, así obligar al
              congreso a juntarse para modificar o revocar la ley. O en un caso
              contrario se rechaza una propuesta en la que se quiere bajar la
              edad de pensión y el congreso la rechaza, el pueblo también tiene
              el poder para juntarse, reunir firmas y hacer que el congreso
              rectifique esta decisión, al considerar que no están actuando en
              pro a sus intereses.
              <br />
              <br />
              Es convocado por el pueblo, para esto se deben alcanzar firmas
correspondientes al 5% del censo electoral inscrito. El Congreso es el encargado de

14

validar dichas firmas y una vez pase el umbral se dará paso a las votaciones, en las
cuales se debe tener una participación de al menos ¼ (25%) de la población registrada
en el censo electoral para ser tomado como válido.
Se debe ser mayor de edad para participar tanto en el recaudo de firmas de apoyo
como para votar en la consulta popular en cuestión.
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

export default Referendo;
