import React from 'react'; 
import './Backdrop.css';




const Backdrop = (props) => {

    let backDropClasses = ['backdrop'];

    if(props.show) {

        backDropClasses = ['backdrop open']
    }

    return(
        <div className = 'backdrop' onClick= {props.click}>
        
        </div>
    )

}
export default Backdrop;