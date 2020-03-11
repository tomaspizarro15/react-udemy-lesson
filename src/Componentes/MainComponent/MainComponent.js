import React, { Component } from 'react';
import CentralBody from './CentralBody';
import "./MainComponent.css";
import LowComponent from '../LowComponent/LowComponent';
import featuredComponent from './FeaturedComponent';

class MainComponents extends Component {

    state = {

        tarjetas: [
            { title: "Angular", content: "Angular JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { title: "React", content: "React JSX front-end webside developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { title: "Vue.js", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
        ],

        showDescarga: true,
        showArrow: false,
        showBackDrop: false,

        featuredTitle : 'Featured Curses',
    }

    showBackDropHandler = () => {
        this.setState({ showArrow: true })
    }

    showSideDrawerHandler = () => {

        const newShowSideDrawer = this.state.showSideDrawer;

        this.setState({ showSideDrawer: !newShowSideDrawer })

    }
    showArrowHandler = () => {

        const newShowArrow = this.state.showArrow;

        this.setState({ showArrow: !newShowArrow })

    }

    redirectGitHubHandler = () => {

        window.open("https://github.com/tomaspizarro15");

    }
    redirectReactHandler = () => {

        window.open("https://reactjs.org/");

    }

    redirectMendozaHandler = () => {
        window.open("http://www.turismo.mendoza.gov.ar/")
    }

    showDescargaHandler = () => {
        const newShowDescarga = this.state.showDescarga;

        this.setState({ showDescarga: !newShowDescarga })
    }
    render() {
        return (

            <div style={{ height: '100%' }}>

                
                <div className="fixer">

                    <CentralBody
                        clickArrow={this.showDescargaHandler}
                        showDescarga={this.state.showDescarga}
                        redirectGH={this.redirectGitHubHandler}
                        redirectReact={this.redirectReactHandler}
                        redirectMendoza={this.redirectMendozaHandler}
                    />
                    <featuredComponent
                        title = {this.state.featuredTitle}
                    />
                    <div className="low_component">
                        {this.state.tarjetas.map((tarjeta, i) => {
                            return (
                                <LowComponent key={i} title={tarjeta.title} content={tarjeta.content} buttonFree={tarjeta.buttonFree} buttonPay={tarjeta.buttonPay} />
                            );
                        })}
                    </div>


                </div>
            </div>
        )
    };
}


export default MainComponents; 
