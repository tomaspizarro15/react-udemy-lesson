import React, { PureComponent } from 'react';
import './LogInComponent.css';
import LogInModal from './LogInModal';



class LogIn extends PureComponent {

    constructor(props){
        super(props)
        console.log("[LogInComponent.js]");
    }

    state = {
        userData: {
            pileName: "Tomás",
            lastName: "Pizarro",
            userName: "reyflig",
            password: "tomipizarro15703728"
        },

        loginStatus : "1",
    }

    usernameHandler = (event) => {

    }

    passwordHandler = (event) => {

    }

    testHandler =  () => {

        localStorage.setItem("status" , 2)
        let test = localStorage.getItem("status")
        console.log("[LogInComponent.js] :::::::> ",test)

    }

    render() {
        let component;



        console.log(this.state.loginStatus)

        if (this.state.loginStatus === "1") {
            console.log("xddxdxdxd")
            component = (
                <div className="login_container">
                    <LogInModal
                        
                        pEvent={(event) => this.passwordHandler(event)}
                        uEvent={(event) => this.usernameHandler(event)}
                        closeEvent = {this.closeHandler}
                        testEvent = {this.testHandler}
                    />
                </div>
            )
        }
        return (
            [component]
        )
    }
}


export default LogIn
