import React from 'react'; 
import './LogInComponent.css'; 

const LogInModal = (props) => {
    return(
        <div className ="login">
            <div className ="login_close"><div className ="close_button"><i>x</i></div></div>
            <div className ="login_header"><p>RFC: Code guides</p></div>
            <div className ="login_data">
                <h1 style = {{fontSize :"1.75vw" , margin: "0"}}>Please Log-in</h1>
                <p>Username</p>
                <input></input>
                <p>Password</p>
                <input></input>
            </div>
        </div>
    )
}


export default LogInModal;