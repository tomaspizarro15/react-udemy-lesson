import React, { Component } from 'react';
import LowComponent from '../LowComponent/LowComponent';
import HeadComponent from './HeadComponent/HeadComponent';
import AboutComponent from './AboutComponent/AboutComponent';
import './AboutComponent/AboutComponent.css'
import MarkingDot from './MarkingDot/MarkingDot';
import SliderButton from './AboutComponent/SliderButtons/SliderButton';
import LowSliderButton from '../LowComponent/LowSliderButton/LowSliderButton';



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

        AboutComponentContenidos: [
            { id: 1, primerTitulo: "Sobre la programacion", segundoTitulo: "Tipos de programacion", contenido: "asd", status: false },
            { id: 2, primerTitulo: "Sobre la industria", segundoTitulo: "Tipos de programadores", contenido: "asd", status: false },
            { id: 3, primerTitulo: "Sobre nosotros", segundoTitulo: "RFCode", contenido: "asda", content: "asd", status: false },
        ],


        aboutTransformValue: 0,
        aboutIterador: 0,
        iterador: 0,
        tarjetasPos: 0,
        transformValue: 0,


        showDescarga: true,
        showArrow: false,
        showBackDrop: false,


        featuredTitle: 'Featured Curses',
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

    lengthTarjetas = (this.state.tarjetas.length / 4)
    lengthTarjetas = Math.ceil(this.lengthTarjetas);


    iterador = this.state.iterador;
    contador = 0;

    aboutIncreaserHandler = () => {



        if (this.state.aboutIterador > 0) {

            this.setState({ aboutTransformValue: this.state.aboutTransformValue + 98.45 })
            this.setState({ aboutIterador: this.state.aboutIterador - 1 })


            console.log(this.state.aboutIterador)



        }

    }

    aboutDecreaserHandler = () => {



        if (this.state.aboutIterador < (this.state.AboutComponentContenidos.length - 1)) {


            this.setState({ aboutTransformValue: this.state.aboutTransformValue - 98.45 })
            this.setState({ aboutIterador: this.state.aboutIterador + 1 })
            console.log(this.state.aboutTransformValue)
            console.log(this.state.aboutIterador)


        }



    }



    cursosDecreaserHandler = () => {

        if (this.state.iterador < (this.lengthTarjetas)) {

            this.setState({ iterador: this.state.iterador + 1 })
            this.setState({ transformValue: this.state.transformValue - 98.5 })

            console.log("=====>", this.state.iterador)
            console.log("=====>", this.state.transformValue)
            console.log("ARRAY LENGTH ========>", this.lengthTarjetas)
        } else {
            this.setState({ transformValue: 0 })
            this.setState({ iterador: 0 })
        }

    }

    cursosIncreaserHandler = () => {

        if (this.state.iterador > 0) {

            this.setState({ iterador: this.state.iterador - 1 })
            this.setState({ transformValue: this.state.transformValue + 98.5 })

            console.log(this.contador)
            console.log("=====>", this.state.iterador)
            console.log("=====>", this.state.transformValue)
        } else {
            this.setState({ transformValue: -(this.lengthTarjetas * 98.5) })
            this.setState({ iterador: this.lengthTarjetas })
        }
    }

    //RENDERING
    render() {

        let aboutTranslate = ["translateX(", this.state.aboutTransformValue, "vw)"];
        let translation = ["translateX(", this.state.transformValue, "vw)"];

        translation = translation.join("");
        translation = translation.trim();
        translation = translation.toString();

        aboutTranslate = aboutTranslate.join("")
        aboutTranslate = aboutTranslate.toString();
        aboutTranslate = aboutTranslate.trim()

        let tarjetas = [...this.state.tarjetas];
        return (
            <div style={{ position: "absolute", height: "100%", width: "100%", alignItems: "center" }} >
                <HeadComponent

                />
                <div className="low_component_background">
                    <LowSliderButton
                        clickIncrease={this.cursosIncreaserHandler}
                        clickDecrease={this.cursosDecreaserHandler}
                    />
                    <div className="low_component">
                        <ul style={{ transform: translation, margin: "0", backgroundColor: "#aaaaaa" }}>
                            {tarjetas.map((tarjeta, i) => {
                                return (
                                    <LowComponent
                                        key={tarjeta.id}
                                        content={tarjeta.content}
                                        title={tarjeta.title}
                                        buttonFree={tarjeta.buttonFree}
                                        buttonPay={tarjeta.buttonPay}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="about_component_container">
                    {this.state.AboutComponentContenidos.map(sButton => {
                        return (
                            <div>
                                <SliderButton
                                    clickIncrease={this.aboutIncreaserHandler}
                                    clickDecrease={this.aboutDecreaserHandler}
                                />
                            </div>
                        );
                    })}
                    <ul style={{ transform: aboutTranslate }}>
                        {
                            this.state.AboutComponentContenidos.map(contenido => {
                                return (
                                    <AboutComponent
                                        primerTitulo={contenido.primerTitulo}
                                        segundoTitulo={contenido.segundoTitulo}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
                <div className ="dots_container"> 
                    {this.state.AboutComponentContenidos.map(dot => {
                        return (
                            <MarkingDot />
                        );
                    })}
                </div>


            </div>
        )
    };
}


export default MainComponents; 
