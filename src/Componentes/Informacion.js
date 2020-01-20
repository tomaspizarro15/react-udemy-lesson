import React from 'react';
import "./EstiloCuerpo.css";

const InfoCuerpo = () => {
     
    return(
        <section className="SeccionInfo">
        <div className="DivCuerpo">
          <div className="Cuerpo">
            <h1>¿Por que React?</h1>
            <p className="Parrafos">
              REACT Es una de las Librerias de Javascript mas utilizadas en el mundo de la Programacion
              por su gran flexibilidad y avances en el desarrollo de paginas web, 
            </p>
          </div>
          <div className="Cuerpo">
            <h1>¿Quien soy?</h1>
            <p className="Parrafos">Soy Tomas Pizarro (19),Programador
                desarrollador de paginas web en componentes REACT ,
             Estudiante de la <p className="UTN">UNIVERSIDAD NACIONAL TECNOLOGICA DE MENDOZA</p>
             en la Tecnicatura de Programacion , con conocimiento de  : <p className = "UTN"> JAVA ,  JAVASCRIPT , HTML , CSS (Certificacion en REACT)</p>
            </p>
          </div>
          <div className="Cuerpo">
            <h1>JSX Useness</h1>
            <p className="Parrafos" ></p>
          </div>
        </div>
      </section>
    )
}



export default InfoCuerpo;
