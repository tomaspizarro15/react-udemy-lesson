import React from 'react';
import './LowComponent.css'


const LowComponent = (props) => {


    return (
        <li className="low_component">
            <div style = {{margin : "1vw"}}>
                <h1 style = {{color : "rgb(253,207,0)"}}>{props.title}</h1>
                <p style ={{color : "white"}}>{props.content}</p>
                <div className="low_button_container">
                    <button >Saber mas</button>
                </div>
            </div>
        </li>
    )
}




export default LowComponent;                      