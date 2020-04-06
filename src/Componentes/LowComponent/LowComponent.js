import React from 'react';
import './LowComponent.css'


const LowComponent = (props) => {

    return (
            <li>
                <img src = {props.logo} alt = "logo_low_component" className ="low_component_logos"></img>
                <p>{props.content}</p>
                <button >Saber mas</button>
            </li>
     
    )
}

export default LowComponent;                      