import React from 'react';
import './AboutComponent.css';


const AboutComponent = (props) => {

    return (

        <div className="about_component">
            <div className="about_component_slider_left" onClick={props.clickDecrease} />
            <div className="about_component_slider_right" onClick={props.clickIncrease} />

            <div className="about_component_tarjeta">
                <h1>{props.primerTitulo}</h1>
                <p>{props.primerContenido}</p>
            </div>
            <div className="about_component_tarjeta">
                <h1>{props.segundoTitulo}</h1>
                <p>{props.segundoContenido}</p>
            </div>

        </div>

    );

}

export default AboutComponent;      