import React from 'react';
import './LowComponent.css'


const LowComponent = (props) => {




    return (
      
            <ul className="low_component">
                <li>
                    <h1>{props.title}</h1>
                    <p>{props.content}</p>
                </li>
            </ul>

    )
}




export default LowComponent;                      