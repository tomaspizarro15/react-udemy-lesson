import React, { Component } from 'react';
import CentralBody from './CentralBody';
import "./MainComponent.css";

class MainComponents extends Component {

    state = {
        showDescarga : true,
        showArrow: false,
        showBackDrop : false,
        showLogIn: false,
        showSideDrawer : true,
    }

    showBackDropHandler =() => {
        this.setState({showArrow : true})
    }

    showSideDrawerHandler = () => {

        const newShowSideDrawer = this.state.showSideDrawer;

        this.setState({showSideDrawer : !newShowSideDrawer})

    }
    showArrowHandler = () => {

        const newShowArrow = this.state.showArrow;

        this.setState({ showArrow: !newShowArrow })

    }

    redirectGitHubHandler = () => {

        window.open("https://github.com/tomaspizarro15/react-udemy-lesson");

    }
    redirectReactHandler = () => {

        window.open("https://reactjs.org/");

    }

    redirectMendozaHandler = () => {
        window.open("http://www.turismo.mendoza.gov.ar/")
    }

    showDescargaHandler = () => {

        const newShowDescarga = this.state.showDescarga;

        this.setState({showDescarga : !newShowDescarga})

    }
    render() {

     

        return (

            <div style ={{height : '100%'}}>
             
                <CentralBody
                    clickArrow = {this.showDescargaHandler}
                    showDescarga = {this.state.showDescarga}
                    redirectGH = {this.redirectGitHubHandler}
                    redirectReact = {this.redirectReactHandler}
                    redirectMendoza = {this.redirectMendozaHandler}
                />
                <div className ="low_component">
                
                </div>
            </div>
        )
    };
}


export default MainComponents; 
