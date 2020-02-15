import React, { Component } from 'react';
import CentralBody from './CentralBody';
import "./MainComponent.css";


class MainComponents extends Component {

    state = {
        showArrow: false,
        showLogIn: false,
    }


    showArrowHandler = () => {

        const newShowArrow = this.state.showArrow;

        this.setState({ showArrow: !newShowArrow })

    }
    render() {

        return (

            <CentralBody
                click={this.showArrowHandler}
                showArrow={this.state.showArrow}
            />
        )
    };
}


export default MainComponents; 
