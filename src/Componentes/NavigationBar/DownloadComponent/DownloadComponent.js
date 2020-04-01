import React from 'react';
import logoFrontEnd from './iconfrontend.png';
import './DownloadComponent.css';

const DownloadComponent = (props) => {


    return (

        <div className="tarjeta_superior">
            <div className="tarjeta_superior_titulo">
                <h1>{props.titulo}</h1>
            </div>
            <div className="tarjeta_superior_content">
                <p>{props.contenido}</p>
            </div>
            <div className="tarjeta_superior_icon">
                <img src={logoFrontEnd} alt="logo_frontend" className="logo_database"></img>
            </div>
        </div>

    )
}

export default DownloadComponent; 