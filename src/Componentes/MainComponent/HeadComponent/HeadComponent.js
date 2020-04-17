import React from 'react';
import './HeadComponent.css'


const HeadComponent = (props) => {



   

    let testHandler = () => {

        console.log("[HeadComponent.js] Status :::::>",props.status)


    }


    return (
        <div className="head_component">
            <div className ="head_bubble_bottom"></div>
            <h1>Bienvenido a RFCode:</h1>
            <button onClick = {testHandler}><a  style = { {color :"#2b2b2b" , textDecoration :"none"} }href = "/login">Comenzar</a></button>
            <div className ="head_bubble_top"></div>
        </div>
    );
}
export default HeadComponent;