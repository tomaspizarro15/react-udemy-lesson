import React from 'react'; 
import './ToggleButton.css';



const ToggleButton = (props) => {

    let classToggle = "toggle_button" 
    let classCheck =   "check_button"
    if(props.active) {

        classToggle = "toggle_button toggled"
        classCheck =   "check_button toggled"
    }


    return(
        <div className ="toggle_container">
            <div className ="toggle_text">
            <p>Remember me</p>
            </div>
            <div className = {classToggle} > 
                <div className ={classCheck} onClick = {props.toggle}></div>
            </div>
        </div>
    );  

}

export default ToggleButton