import React from 'react'; 
import './LogInComponent.css'; 

const LogInModal = (props) => {
    return(
        <div className ="login">
            <div className ="login_header"><p>RFC: Code guides</p></div>
            <div className ="login_data" onKeyDown ={props.enterEvent}>
                <h1 style = {{fontSize :"1.75vw" , margin: "0"}}>Please Log-in</h1>
                <p>Username:</p>
                <input placeholder = "username..." onChange = {props.formUsername} onKeyDown = {props.enterEvent}></input>
                <p>Password:</p>
                <input placeholder ="password..." onChange = {props.formPassword} onKeyDown = {props.enterEvent}></input>
                <button>log in </button>
                <a style = {{fontSize : "1vw" , textDecoration :"underline" , margin:" 1vw 0 0 0" , }} href = "/" onClick = {props.closeEvent} >not for now, thanks!</a>
                <p style = {{fontSize : "1vw" , textDecoration :"underline" , margin:"0" , }} onClick = {props.testEvent} >I don't have an account, register me!</p>
            </div>
        </div>
    )
}


export default LogInModal;