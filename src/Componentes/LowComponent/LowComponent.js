import React from 'react';
import './LowComponent.css'


const LowComponent = (props) => {


    return (
        
            <li>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button >Saber mas</button>
            </li>
     
    )
}




export default LowComponent;                      