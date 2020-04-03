import React from 'react';
import './MarkingDot.css';


const MarkingDot = (props) => {

    let dotClasses = "dot"
    console.log("dot activo =====>" ,dotClasses) 

    if(props.isActive) {
        dotClasses = "dot inactive"
        console.log("dot inactivo =====>" , dotClasses)
    }

    return(
        <div className = {dotClasses}>
            
        </div>
    );


}



export default React.memo(MarkingDot)