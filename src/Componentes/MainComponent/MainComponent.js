import React, { Component } from 'react';
import CentralBody from './CentralBody';
import "./MainComponent.css";

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
        showLogIn: false,
        showSideDrawer: true,
    }

    sdState = {

        sdContent: [
            { title: "Settings", content: "My Account", content_1: "My Courses", content_2: "My Projects", content_3: "Log out" },
            { title: "Store", content: "Curses", content_1: "Masterclasses", content_2: "Products", content_3: "Offerts" },
            { title: "Community", content: "Forum  Q&A", content_1: "Community Projects", content_2: "Community Courses", content_3: false },
        ],

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
                    <div className="featured_component">
                        <h1>Featured Curses</h1>
                    </div>
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
