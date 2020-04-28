import React from 'react';
import './../Login/LoginForm.css';


const Form = (props) => {


    

    return (


        <React.Fragment>
            <p>{props.config.config.title}</p>
            <input {...props.config.config} value={props.config.value} onChange = {props.changed}></input>
        </React.Fragment>
    )

}


export default Form; 