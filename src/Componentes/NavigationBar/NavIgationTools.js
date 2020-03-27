import React from 'react';
import './NavigationTools.css';



const NavigationTools = (props) => {



  return (

    <div className ="nav_tools">
      <ul>
        <li><button onClick = {props.click}>{props.titulo}</button></li>
      </ul>
    </div>
  )
}


export default NavigationTools; 