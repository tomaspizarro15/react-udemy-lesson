import React from 'react';
import './LowComponent.css'


const LowComponent = (props) => {




    return (
        <div className="low_component_tarjetas">
            <ul>
                <li>
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                    <div>
                        <button>{props.buttonFree}</button>
                        <button>{props.buttonPay}</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}




export default LowComponent;                      