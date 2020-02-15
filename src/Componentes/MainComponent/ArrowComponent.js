import React from 'react';
import './MainComponent.css'


const ArrowComponent = (props) => {

    let arrowClasses = ['main_part_one']

        if(props.showArrow) {
            arrowClasses = ['main_part_one open']
        }
    return (
        <div className= {arrowClasses}>
            <ul>
                <li>
                    DOWNLOAD FOR REACT:IOS/MAC
                       <button className="main_part_one_download_button">download v 1:3.8.8</button>
                </li>
                <li>
                    DOWNLOAD FOR  REACT:WINDOWS
                        <button className="main_part_one_download_button">download v 1:2.5.8</button>
                </li>
            </ul>

            <ul className="arrow_ul">
                <i className="arrow down" onClick={props.click}></i>
            </ul>
        </div>
    );

}


export default ArrowComponent; 