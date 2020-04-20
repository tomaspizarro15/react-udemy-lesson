import React from 'react';
import './Introduction.css';


const Introduction = (props) => {


    return (
        <div className="int_container">
            <div className="int_header"><h1>{props.title}</h1></div>
            <div className="int_body"><p>{props.text}</p></div>
        </div>
    );

}

export default Introduction; 