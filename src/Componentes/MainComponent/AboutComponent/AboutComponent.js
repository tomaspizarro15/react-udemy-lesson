import React from 'react';
import './AboutComponent.css';


const AboutComponent = (props) => {


    return (
                
            <div className ="about_component_container_content">
                <h1>{props.primerTitulo}</h1>
                <h1>{props.segundoTitulo}</h1>
                <div className = "about_component_marcadores">             
                </div>
            </div>
                
    );

}

export default AboutComponent;