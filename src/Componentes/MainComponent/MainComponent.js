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
            { id: 0, primerTitulo: "0 ", segundoTitulo: "Tipos de programacion", contenido: "asd", isActive: true },
            { id: 1, primerTitulo: "1 ", segundoTitulo: "Tipos de programacion", contenido: "asd", isActive: false },
            { id: 2, primerTitulo: "2 ", segundoTitulo: "Tipos de programacion", contenido: "asd", isActive: false },
            { id: 3, primerTitulo: "3 ", segundoTitulo: "Tipos de programacion", contenido: "asd", isActive: false },
            { id: 4, primerTitulo: "4 ", segundoTitulo: "Tipos de programacion", contenido: "asd", isActive: false },


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

    aboutDecreaserHandler = (contenido, i) => {

        const itemsArray = [...this.state.AboutComponentContenidos]
        const oldItem = itemsArray[i]
        let prevItem = itemsArray[i - 1];

        if (!prevItem) return;

        oldItem.isActive = false;
        prevItem.isActive = true;

        if (this.state.aboutIterador > 0) {

            this.setState({ aboutTransformValue: this.state.aboutTransformValue + 98.45 })
            this.setState({ aboutIterador: this.state.aboutIterador - 1 })
            this.setState({ AboutComponentContenidos: itemsArray })

            console.log(this.state.aboutIterador)
        }

    }

    aboutIncreaserHandler = (contenido, i) => {
        // 0 
        const itemsArray = [...this.state.AboutComponentContenidos]

        const oldItem = itemsArray[i]
        let nextItem = itemsArray[i + 1];

        if (!nextItem) return;

        oldItem.isActive = false;
        nextItem.isActive = true;

        if (this.state.aboutIterador < (this.state.AboutComponentContenidos.length - 1)) {

            this.setState({ aboutTransformValue: this.state.aboutTransformValue - 98.45 })
            this.setState({ aboutIterador: this.state.aboutIterador + 1 })
            this.setState({ AboutComponentContenidos: itemsArray })


        }
        console.log(this.state.AboutComponentContenidos)


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


                    <ul style={{ transform: aboutTranslate }}>
                        {
                            this.state.AboutComponentContenidos.map((contenido, i) => {
                                return (
                                    <AboutComponent
                                        primerTitulo={contenido.primerTitulo}
                                        segundoTitulo={contenido.segundoTitulo}
                                        clickIncrease={() => this.aboutIncreaserHandler(contenido, i)}
                                        clickDecrease={() => this.aboutDecreaserHandler(contenido, i)}
                                    />
                                )
                            })

                        }



                    </ul>
                    <div className="dot_container">
                        {this.state.AboutComponentContenidos.map(dot => {
                            return (
                                <MarkingDot
                                    isActive={dot.isActive}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    };
}


export default MainComponents; 
