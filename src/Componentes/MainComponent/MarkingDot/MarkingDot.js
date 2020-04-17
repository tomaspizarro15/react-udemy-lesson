import React from 'react';
import './MarkingDot.css';


const MarkingDot = (props) => {
    let dotClasses = "dot"
    if(props.isActive) {
        dotClasses = "dot inactive"
    }
    return(
        <div className = {dotClasses}>
            
        </div>
    );


}



export default React.memo(MarkingDot)