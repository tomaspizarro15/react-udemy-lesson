import './LowSliderButton.css';
import React from 'react';


const LowSliderButton = (props) => {

    return (
        <div>
            <div className="low_component_arrow_left">
                <p><i className="arrow_left" onClick={props.clickIncrease}></i></p>
            </div>
            <div className="low_component_arrow_right">
                <p><i className="arrow_right" onClick={props.clickDecrease}></i></p>
            </div>
        </div>
    )

}


export default LowSliderButton