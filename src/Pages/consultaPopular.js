import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/nav.js";
import style from "../Style/inicio.css";
import Footer from "../components/footer.js";
import cons from "../Images/Consultapopular.jpg";

class ConsultaPopular extends React.Component {
  render() {
    return (
      <div class="container-fluid fondo">
        <header>
          <Nav />
        </header>

        <div class="row">
          <div class="col-sm-10	col-md-10	col-lg-10	col-xl-10 contenido">
            <h2 class="titulos"> Consulta popular</h2>
            <br />
            <br />

            <p class="texto">
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=330">
                La Ley 134 de 1994
              </a>
              : “la consulta popular es la institución mediante la cual, una
              pregunta de carácter general sobre un asunto de trascendencia
              nacional, departamental, municipal, distrital o local, es sometida
              por el Presidente de la República, el gobernador o el alcalde,
              según el caso, a consideración del pueblo para que éste se
              pronuncie formalmente al respecto”.
              <br />
              <br />
              Es donde los dirigentes le preguntan al pueblo sobre un asunto en
              específico sobre una acción del presidente o algún otro gobernante
              para saber nuestra opinión ya sea a favor o en contra de lo que
              sea que nos esten reuniendo.
              <br />
              <br />
              Imagen ejemplo: <br />{" "}
              <div className="imagen">
                <img src={cons} alt="..." className="ejemplos" />
                <br />{" "}
               <a href="www.registraduria.gov.co.
                  https://www.registraduria.gov.co/-Tarjeta-de-electoral,2911-.html
                  "> <q class="citas">
                  Tarjeta-de-electoral. (2011, 27 abril). <br />
                  [Ilustración].</q></a> <br />
                
              </div>
              <br />
              La consulta popular puede ser convocada tanto por el Congreso de
la República, juntando estos un 33% de cualquier cámara, o por la misma ciudadanía,
teniendo un apoyo del 5% del censo electoral registrado.
Se debe ser mayor de edad para participar tanto en el recaudo de firmas de apoyo
como para votar en la consulta popular en cuestión.
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

export default ConsultaPopular;
