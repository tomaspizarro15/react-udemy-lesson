import './SliderButton.css';
import React from 'react';


const SliderButton = (props) => {


    return (
        <div>


            <div className="about_component_slider_button_left" onClick={props.clickIncrease}></div>
            <div className="about_component_slider_button_right" onClick={props.clickDecrease}></div>

        </div>
    );

}

export default React.memo(SliderButton)