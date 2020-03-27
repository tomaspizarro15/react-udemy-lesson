import React, { Component } from 'react';
import CentralBody from './CentralBody';
import "./MainComponent.css";
import LowComponent from '../LowComponent/LowComponent';
import featuredComponent from './FeaturedComponent';


class MainComponents extends Component {

    state = {
        tarjetas: [
            { id: 1, title: "React", content: "Angular JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 2, title: "JSX", content: "React JSX front-end webside developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 3, title: "Angular", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 4, title: "Vue", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 5, title: "Python", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 6, title: "Python DJango", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 7, title: "PyGames", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 8, title: "Unreal Engine", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 9, title: "Unity", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 10, title: "JSON", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 11, title: "SQL Databases", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 12, title: "Node Databases", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 13, title: "Git Hub", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 14, title: "Java", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 15, title: "C++", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            { id: 16, title: "C#", content: "Vue JS front-end website developing course", buttonFree: "Free course", buttonPay: "Paid course" },
            
        ],
        iterador: 0,
        tarjetasPos: 0,
        transformValue : 0,
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

    //REDIRECTS

    redirectGitHubHandler = () => {

        window.open("https://github.com/tomaspizarro15");

    }
    redirectReactHandler = () => {

        window.open("https://reactjs.org/");

    }

    //DOWNLOAD COMPONENT

    redirectMendozaHandler = () => {
        window.open("http://www.turismo.mendoza.gov.ar/")
    }

    showDescargaHandler = () => {
        const newShowDescarga = this.state.showDescarga;

        this.setState({ showDescarga: !newShowDescarga })
    }

    //SLIDER LOGICS AND ITERATORS

     lengthTarjetas = (this.state.tarjetas.length /3)
     lengthTarjetas = Math.ceil(this.lengthTarjetas);

    iterador = this.state.iterador;
    contador = 0;
    
    slideDecreaserHandler = () => {
    
    if (this.state.iterador < (this.lengthTarjetas)) {

            this.setState({ iterador: this.state.iterador + 1 })
            this.setState({ transformValue : this.state.transformValue - 49.25})

            console.log("=====>", this.state.iterador)
            console.log("=====>" , this.state.transformValue)
            console.log("ARRAY LENGTH ========>" ,this.lengthTarjetas)
        }else {
            this.setState({transformValue : 0})
            this.setState({iterador : 0})
        }

    }
    
    slideIncreaserHandler = () => {
    
        if (this.state.iterador > 0) {

            this.setState({ iterador: this.state.iterador -1})
            this.setState({ transformValue : this.state.transformValue + 49.25})
           
            console.log(this.contador)
            console.log("=====>", this.state.iterador)
            console.log("=====>" , this.state.transformValue)
        }else {
            this.setState({transformValue : -(this.lengthTarjetas * 49.25)})
            this.setState({iterador : this.lengthTarjetas})
        }
    }

    //RENDERING
    render() {



        let translation =  [ "translateX(" ,this.state.transformValue , "vw)"]; 


        translation = translation.join("");
        translation = translation.trim();
        translation = translation.toString();

        
        let tarjetas = [...this.state.tarjetas];

        let sliderCurrentPosition = ["low_component_position"] 
      
         
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
                    <div className ="header_low_component">
                        <p>Featured Curses</p>
                    </div>
                    <div className= "low_component_container">

                        <div className="arrow_container_right">
                            <p><i className="arrow right" onClick={this.slideIncreaserHandler}></i></p>
                        </div>
                        <div className="low_component_container">

                            <ul style = {{transform: translation}} className = {sliderCurrentPosition}>
                                {tarjetas.map((tarjeta, i) => {
                                    return (
                                        <LowComponent
                                            key={tarjeta.id}
                                            content={tarjeta.content}
                                            title={tarjeta.title}
                                            buttonFree={tarjeta.buttonFree}
                                            buttonPay={tarjeta.buttonPay} />
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="arrow_container_left">
                            <p><i className="arrow left" onClick={this.slideDecreaserHandler}></i></p>
                        </div>
                    </div>

                </div>
            </div>
        )
    };
}


export default MainComponents; 
