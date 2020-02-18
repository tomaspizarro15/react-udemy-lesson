import React, { Component } from 'react';
import CentralBody from './CentralBody';
import "./MainComponent.css";
import LowComponent from '../LowComponent/LowComponent';

class MainComponents extends Component {

    state = {
        showArrow: false,
        showBackDrop : false,
        showLogIn: false,
    }

    showBackDropHandler =() => {
        this.setState({showArrow : true})
    }


    showArrowHandler = () => {

        const newShowArrow = this.state.showArrow;

        this.setState({ showArrow: !newShowArrow })

    }
    render() {

        return (

            <div>
                <CentralBody
                    click={this.showArrowHandler}
                    showArrow={this.state.showArrow}
                />
                <LowComponent/>
            </div>
        )
    };
}


export default MainComponents; 
