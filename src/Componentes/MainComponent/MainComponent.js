import React, { Component } from 'react';
import CentralBody from './CentralBody';
import "./MainComponent.css";
import LowComponent from '../LowComponent/LowComponent';


class MainComponents extends Component {

    state = {
        tarjetas: [
            { id: 1, title: "0", content: "Angular JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 2, title: "1", content: "React JSX front-end webside developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 3, title: "2", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 4, title: "3", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 5, title: "4", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 6, title: "5", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 7, title: "6", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 8, title: "7", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 9, title: "8", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 10, title: "9", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 11, title: "10", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
        ], 
        iterador : 0,  
        tarjetasPos: 0,
        showDescarga: true,
        showArrow: false,
        showBackDrop: false,

        featuredTitle: 'Featured Curses',
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


    newTarjetas = [...this.state.tarjetas]

   iteradorHandler = () => {

        let iterador = 0; 
        
        this.setState({iterador : iterador++})

   }
    render() {

        let tarjetas = [...this.state.tarjetas];

        if(this.state.iterador === 0) {

            tarjetas.splice(0,5)

        }else if(this.state.iterador === 1){
            
            tarjetas.splice(0,5)

        };

     

        let containerClasses = 'low_component_container'
        return (
            <div>
                <div className="fixer">
                    <CentralBody
                        test={this.testHandler}
                        clickArrow={this.showDescargaHandler}
                        showDescarga={this.state.showDescarga}
                        redirectGH={this.redirectGitHubHandler}
                        redirectReact={this.redirectReactHandler}
                        redirectMendoza={this.redirectMendozaHandler}
                    />
                    
                    <div className={containerClasses}>

                        <div className="arrow_container">
                            <p><i className="arrow right" onClick={this.iteradorHandler}></i></p>
                        </div>
                        <div className="low_component_container">
                            {tarjetas.map((tarjeta, i) => {
                                return (
                                        <LowComponent
                                    key={tarjeta.id}
                                     title={tarjeta.title}
                                    content={tarjeta.content}
                                    buttonFree={tarjeta.buttonFree}
                                    buttonPay={tarjeta.buttonPay} />                                
                               )
                            })}
                        </div>
                        <div className="arrow_container">
                            <p><i className="arrow left"></i></p>
                        </div>
                    </div>

                </div>
            </div>
        )
    };
}


export default MainComponents; 
