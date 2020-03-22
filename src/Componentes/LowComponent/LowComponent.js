import React from 'react';
import './LowComponent.css'
import logo from '/jslogo.png'

const LowComponent = (props) => {


    return (
        <li className="low_component">
            <div style = {{margin : "1vw"}}>
                <h1 style = {{color : "rgb(253,207,0)"}}>{props.title}</h1>
                <p style ={{color : "white"}}>{props.content}</p>
                <img src = {process.env.PUBLIC_URL+'/JS LOGO.png'} alt = "logo"/>
                <div className="low_button_container">
                    <button >Saber mas</button>
                </div>
            </div>
        </li>
    )
}




export default LowComponent;                      