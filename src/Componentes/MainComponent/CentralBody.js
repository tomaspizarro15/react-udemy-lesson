import React from 'react';
import "./MainComponent.css";

const CentralBody = (props) => {

    return (

        <div className="main">
            <div className="main_uno">
                <div className="uno_button_left">
                    <h1>React for Windows</h1>
                    <p>V 1.23.3</p>
                    <button>Download</button>
                </div>
                <div className="uno_spacer"></div>
                <div className="uno_button_right">
                    <h1>React for MAC</h1>
                    <p>V 1.22.7</p>
                    <button>Download</button>
                </div>
            </div>
            <div className='uno_arrow'><i>Arrow</i></div>
            <div></div>
        </div>


    );




}

export default CentralBody;





