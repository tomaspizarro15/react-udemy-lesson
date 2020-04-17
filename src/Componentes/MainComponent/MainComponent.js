import React, { Component } from 'react';
import LowComponent from '../LowComponent/LowComponent';
import HeadComponent from './HeadComponent/HeadComponent';
import AboutComponent from './AboutComponent/AboutComponent';
import './AboutComponent/AboutComponent.css'
import MarkingDot from './MarkingDot/MarkingDot';
import LowSliderButton from '../LowComponent/LowSliderButton/LowSliderButton';
import LogoAngular from './WebsiteLowComponentImages/iconAngular.png'
import LogoReact from './WebsiteLowComponentImages/iconReact.png';
import LogoCpp from './WebsiteLowComponentImages/iconCpp.png';
import LogoDjango from './WebsiteLowComponentImages/iconDJango.png';
import LogoGit from './WebsiteLowComponentImages/iconGit.png';
import LogoJava from './WebsiteLowComponentImages/iconJava.png';
import LogoNode from './WebsiteLowComponentImages/iconNode.png';
import LogoJson from './WebsiteLowComponentImages/iconJson.png';
import LogoPython from './WebsiteLowComponentImages/iconPython.png';
import LogoUnreal from './WebsiteLowComponentImages/iconUnreal.png';
import LogoUnity from './WebsiteLowComponentImages/inonUnity.png';
import LogoVuejs from './WebsiteLowComponentImages/iconVue.png';
import LogoCsharp from './WebsiteLowComponentImages/iconCSharp.png';
import LogoSQL from './WebsiteLowComponentImages/iconSQL.png';
import LogoJs from './WebsiteLowComponentImages/iconJs.png';
import Chart from './Chart/Chart';
class MainComponents extends Component {

    state = {
        tarjetas: [
            { id: 0, title: "JavaScript", content: "Learn Javascript web Development", logo: LogoJs},
            { id: 1, title: "React", content: "Learn React / React Native Development", logo: LogoReact },
            { id: 2, title: "Angular", content: "Learn Angular Framework web Development", logo: LogoAngular },
            { id: 3, title: "Vue", content: "Learn Vue.js Framework web Development", logo: LogoVuejs },
            { id: 4, title: "Python", content: "Learn App design with Python", logo: LogoPython },
            { id: 5, title: "Python DJango", content: "Learn Python framework App Development", logo: LogoDjango },
            { id: 6, title: "Unreal Engine", content: "Learn how to use Unreal game Engine", logo: LogoUnreal },
            { id: 7, title: "Unity", content: "Learn how to use Unity game Engine", logo: LogoUnity },
            { id: 8, title: "JSON", content: "Learn Javascript Object notation", logo: LogoJson },
            { id: 9, title: "SQL Databases", content: "Learn Databases development", logo: LogoSQL },
            { id: 10, title: "Node", content: "Learn Node execution environment", logo: LogoNode },
            { id: 11, title: "Git Hub", content: "Learn how to apply Git Hub to your projects", logo: LogoGit },
            { id: 12, title: "Java", content: "Learn Java Object-oriented language", logo: LogoJava },
            { id: 13, title: "C++", content: "Learn C++ Object-oriented language", logo: LogoCpp },
            { id: 14, title: "C#", content: "Learn the evolution of C++ language", logo: LogoCsharp },
        ],

        AboutComponentContenidos: [
            { id: 0, primerTitulo: "Sobre La programacion", segundoTitulo: "Tipos de programacion", primerContenido: "La programacion es simplemente la resolucion de Problemas mediante el desarrollo de diversos algoritmos ,algoritmos que son ejecutados como un codigo , el codigo fuente , un programa debe ser eficiente ,independiente de su lenguaje, tiene que tener un ciclo de vida claro y poder resolver la problematica planteada" , segundoContenido : "(PE) Programación Estructurada , Programacion Modular , (POO)Programacion orientada a Objetos , Programacion Funcional , Programacion Logica", isActive: true },
            { id: 1, primerTitulo: "La industria", segundoTitulo: "Ramas de la industria", primerContenido: "La industria de la programacion engloba tantas cosas que no podriamos contabilizarlas todas , el trabajo de un programador es enfocado al equipo y a la conexion con otras industrias, desde la seguridad , robotica, o diseño , es decir, que la programacion es importante en muchos ambitos y rubros del mundo actual , ya que siempre se necesitara a alguien que desarrolle la logica en los negocios y a su vez que resuelva problematicas" , segundoContenido : "Desarrollo Web, CyberSecurity, Desarrol  lo de Aplicaciones, Desarrollo de Videojuegos, Desarrollos de SO, Redes , Sistemas , Servidores", isActive: false },
            { id: 2, primerTitulo: "Paradigmas", segundoTitulo: "Los paradigmas", primerContenido: "Los paradigmas son conceptos y reglas sobre la programacion , que modelan el proceso de desarrollo y procedimientos de un programa el correcto manejo y conocimiento de los paradigmas para un programador es una habilidad escencial para desarrollar su trabajo" , segundoContenido : "Los Paradigmas son: Imperativo , Declarativo , Funcional , Orientado de Objetos , de Procedimientos , Logico", isActive: false },
            { id: 3, primerTitulo: "Tipos de Lenguajes", segundoTitulo: "Los lenguajes", primerContenido: "Hoy en dia existen cientos de miles de lenguajes de programacion , utilizados para cientos de distintos enfoques y distintos modelos y paradigmas de programas , aunque la gran mayoria de ellos no son muy usados , algunos perduran y muchos mueren , los mas usados son los mas requeridos logicamente, muchos evolucionaron como el famoso C , o muchos desarrollaron librerias y extensiones que perfeccionan el lenguaje como Python o JavaScript , tambien existen muchos tipos, como los lenguajes funcionales o tambien los lenguajes orientados a objetos , como Java." , segundoContenido : "Los lenguajes de programacion mas utilizados son : Python , C , C#, C++ , Java , JavaScript,Kotlin, Ruby, TypeScript y diversas Frameworks , cabe aclarar que un programa es independiente de todo Lenguaje de operacion y de Sistemas Operativos", isActive: false },
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

            this.setState({ aboutTransformValue: this.state.aboutTransformValue + 100})
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

            this.setState({ aboutTransformValue: this.state.aboutTransformValue - 100})
            this.setState({ aboutIterador: this.state.aboutIterador + 1 })
            this.setState({ AboutComponentContenidos: itemsArray })


        }
        console.log(this.state.AboutComponentContenidos)


    }



    cursosDecreaserHandler = (i) => {

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

    cursosIncreaserHandler = (i) => {

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

        let status = localStorage.getItem("status");

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
            <div style={{ position: "absolute", height: "100%", width: "100%", alignItems: "center"}} >
                <HeadComponent
                    status = {status}
                />
                <div className="low_component_background">
                    <LowSliderButton
                        clickIncrease={this.cursosIncreaserHandler}
                        clickDecrease={this.cursosDecreaserHandler}
                    />
                    <div className="low_component">
                        <ul style={{ transform: translation, margin: "0", backgroundColor: "#2b2b2b" }}>
                            {tarjetas.map((tarjeta, i) => {
                                return (
                                    <LowComponent
                                        key={tarjeta.id}
                                        content={tarjeta.content}
                                        logo={tarjeta.logo}
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
                                        key = {i}
                                        primerTitulo={contenido.primerTitulo}
                                        primerContenido ={contenido.primerContenido}
                                        segundoTitulo={contenido.segundoTitulo}
                                        segundoContenido ={contenido.segundoContenido}
                                        clickIncrease={() => this.aboutIncreaserHandler(contenido, i)}
                                        clickDecrease={() => this.aboutDecreaserHandler(contenido, i)}
                                    />
                                )
                            })
                        }
                    </ul>
                    <div className="dot_container">
                        {this.state.AboutComponentContenidos.map((dot , i) => {
                            return (
                                <MarkingDot
                                    key = {i}
                                    isActive={dot.isActive}
                                />
                            )
                        })}
                    </div>      
                </div>
                <Chart/>
            </div>
        )
    };
}


export default MainComponents; 
