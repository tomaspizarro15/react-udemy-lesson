import React from 'react';
import './../Login/LoginForm.css';


const Form = (props) => {



    let loginFormClasses = null; 
    
    if(props.status === 0){

        loginFormClasses = ["login_form_input"]    
        
    }

    if(props.status === 1){

        loginFormClasses = ["login_form_input" , "invalid"]

    }
    if(props.status === 2){

        loginFormClasses = ["login_form_input" , "valid"] 

    }  

    return (

        <React.Fragment>
            <p>{props.config.config.title}</p>
            <input {...props.config.config} value={props.config.value} onChange = {props.changed} className ={loginFormClasses.join(" ")}></input>
        </React.Fragment>
    )

}


export default Form; 