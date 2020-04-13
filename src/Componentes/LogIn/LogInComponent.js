import React, { PureComponent } from 'react';
import './LogInComponent.css';
import LogInModal from './LogInModal';



class LogIn extends PureComponent {


    render() {
        return (
            <div className ="login_container">

             <LogInModal/>

            </div>
        )
    }
}


export default LogIn
