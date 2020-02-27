import React , {Component} from 'react'; 
import './DrawerToggleButton.css';
const DrawerToggleButton  = (props) => {
    return(
      <div>
            <button className = "toggle_button" onClick = {props.click}>
            <div className = "toggle_button_line"/>
            <div className = "toggle_button_line"/>
            <div className = "toggle_button_line"/>
        </button>
      </div>
    );  
}


export default DrawerToggleButton; 