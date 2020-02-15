import React, { Component } from 'react';
import CentralBody from './CentralBody';
import "./MainComponent.css";


class MainComponents extends Component {
    render() {
        return (
            <CentralBody
                click = {this.showLogInHandler}
            />
        )
    };
}


export default MainComponents; 
