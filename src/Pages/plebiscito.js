import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "../components/nav.js";
import style from "../Style/inicio.css";
import Footer from "../components/footer.js";

class Plebiscito extends React.Component {
  render() {
    return (
      <div class="container-fluid fondo">
        <header>
          <Nav />
        </header>

        <div class="row">
        
          <div class="col-sm-10	col-md-10	col-lg-10	col-xl-10 contenido">
            <h2 class="titulos"> Plebiscito</h2>
            <br />
              <br />

            <p class="texto">
              <br />
              <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=330#:~:text=ARTÍCULO%207º.,C-180%20de%201994).">Según el artículo 7 de la ley 134 de 1994.</a> <br/> 

              Este es el pronunciamiento del pueblo convocado por el <strong>Presidente de la República</strong>, mediante el cual se apoya
               o se rechaza una determinada decisión de éste. En un plebiscito solo se pueden someter a votación, las políticas que no requieren
                de la aprobación previa del Congreso de la República, a excepción de las relacionadas con los <a href="https://scielo.conicyt.cl/scielo.php?script=sci_arttext&pid=S0718-00122002000100009#:~:text=La%20Constitución%20Política%20(C.P.),al%20imperio%20de%20la%20Constitución.">
                  Estados de excepción</a> y el ejercicio de poderes correspondientes. 
                  <br />  <br />
                  Para llevar a cabo un plebiscito el Presidente de la República debe notificar inmediatamente al Congreso su intención de convocarlo, 
                  sus razones para hacerlo  y la fecha en la que se llevará a cabo la votación la cual no debe ser anterior a un mes y posterior a 4 meses a partir de la fecha 
                  en la cual el Congreso recibe el informe del Presidente. <br/>
                  una vez pasado un mes de la manifestación de Presidente a realizar un plebiscito, si ninguna de las dos Cámaras haya manifestado alguna objeción el presidente podrá convocarlo.
                  <br />  <br />


              <strong>Referencia: </strong> negociaciones de paz con Las FARC. 2012-2016. En estas negociaciones se llegó a un acuerdo en el 2016
              la cual podría haber sido aprobada por el Presidente dentro de sus capacidades, pero, para darle mayor fuerza y respaldo a este acuerdo, se decidió someterse a plebiscito.
              <br />  <br />
              <strong>Resultados: </strong> Sí 49.78% || No 50.21%
              
              
              
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

export default Plebiscito;