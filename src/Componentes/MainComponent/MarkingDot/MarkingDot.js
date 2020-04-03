import React from 'react';
import './MarkingDot.css';


const MarkingDot = (props) => {

    let dotClasses = "dot"


    return(
        <div className = {dotClasses}>
            
        </div>
    );


}



export default React.memo(MarkingDot)