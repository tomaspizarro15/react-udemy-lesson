import React from 'react';
import './AboutComponent.css';


const AboutComponent = (props) => {

    return (

        <div className="about_component">
            <div className ="about_component_slider_left" onClick = {props.clickDecrease} style = {{backgroundColor :"red"}}/>
            <h1>{props.primerTitulo}</h1>
            <h1>{props.segundoTitulo}</h1>
            <div className ="about_component_slider_right" onClick = {props.clickIncrease} style = {{backgroundColor :"blue"}}/>

        </div>

    );

}

export default AboutComponent;      