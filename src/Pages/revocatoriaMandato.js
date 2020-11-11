import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/nav.js";
import style from "../Style/inicio.css";
import Footer from "../components/footer.js";

class RevocatoriaMandato extends React.Component {
  render() {
    return (
      <div class="container-fluid fondo">
        <header>
          <Nav />
        </header>

        <div class="row">
          <div class="col-sm-10	col-md-10	col-lg-10	col-xl-10 contenido">
            <h2 class="titulos"> Revocatoria de mandato</h2>
            <br />
            <br />

            <p class="texto">
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=330#:~:text=Revocado%20el%20mandato%20a%20un,los%20resultados%20de%20la%20votación.">
                Ley 134 de 1994
              </a>{" "}
              “La revocatoria del mandato es un derecho político, por medio del
              cual los ciudadanos pueden dar por terminado el mandato que le han
              conferido a un gobernador o a un alcalde.”
              <br />
              <br />
              Este es un derecho el cual los ciudadanos podemos terminar el
              mandato que se le entregó a un mandatario (presidente, alcalde,
              etc) ya sea porque está cometiendo fraude, no cumplió sus
              propuestas, está haciendo algún acto delictivo o no estemos de
              acuerdo con las funciones que está realizando.
              <br />
              <br />
              Para solicitar la revocatoria del mandato de un mandatario, un
              número de ciudadanos, mayor al 40% del total de los votos válidos
              emitidos en la elección del respectivo mandatario, debe solicitar
              con su firma ante la Registraduría del Estado Civil
              correspondiente, la convocatoria a la votación para la revocatoria
              del mandato de un gobernador o un alcalde.
              <br />
              <br />
              En 2018 por primera vez en Colombia es revocado un mandatario
              público con el 97% de votos a favor del Sí, fue el alcalde de
              Tasco (Boyacá) Nelson Javier García Castellanos (Por primera vez
              en Colombia es revocado un alcalde. (2018, 30 julio).
              <a href="  https://www.rcnradio.com/politica/por-primera-vez-en-colombia-es-revocado-un-alcalde)">
                RCN Radio.
              </a>
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

export default RevocatoriaMandato;
