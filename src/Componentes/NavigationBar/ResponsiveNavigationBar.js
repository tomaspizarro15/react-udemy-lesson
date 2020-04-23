import React, { Component } from 'react';
import "./ResponsiveNavigationBar.css"
import "./DownloadComponent/DownloadComponent.css"
import DownloadComponent from './DownloadComponent/DownloadComponent';
import NavigationTools from './NavIgationTools';
import Modal from '../Modal/Modal';
import NavigationInput from './NavigationInput';
import BrandLogo from './BrandLogo';
import SocialMedia from './SocialMediaComponent/SocialMedia';
import { Link } from 'react-router-dom';
class NavBar extends Component {


    state = {

        

        modals: [
            { id: 0, boton: "Web", titulo: "Desarrollo Web", formulario: "Aprender Web developing es uno los objetivos mas buscados en la industria hoy en dia . A continuacion te explicaremos todo sobre el desarrolo , la industria y la flexibilidad de nuestro rubro . Dejanos introducirte a distintas plataformas de Aprendizaje ajustandose a tu comodidad", contenido: "Aprender desarrollo web:contamos con cursos diversos para Front-end : en lenguajes como Javascript,Python , incluyendo todo tipo de frameworks como React, Angular , Vue.js , TypeScript y Back-end : con especializacion en bases de datos tipo :  mySQL y noSQL , hasta inclusive quizas en un futuro puedas desarrollarte en la industria como programador Full-Stack en desarollo web." },
            { id: 1, boton: "Apps", titulo: "Desarrollo de Aplicaciones", contenido: "Aprender App developing es una muy buena eleccion para un programador, cuenta con una gran industria, con excelentes lenguajes y mucha flexibilad para el desarrollo multiplataforma, con lenguajes como Python ,Java, Kotlin, C/C++", formulario: "Si te especializas en el desarrollo de aplicaciones mobiles , tus oportunidades en la industria seran variadas, para todo tipo de aplicaciones , juegos , redes sociales, pequeños SO , aprender a compilar codigo en dispositivos Mobiles, Cross-SO con iOS y Android, validar aplicaciones para plataformas de descarga como la App Store y ¡Apple Store" },
            { id: 2, boton: "Games", titulo: "Desarrollo de Videojuegos", contenido: "Aprender Game-desing es una de las habilidades mas dificiles de un programador, se requieren conocimientos de fisica , de diseño y de programacion orientada a objetos , ademas del manejo apropiado de motores graficos como : Unreal Engine, Godot Engine , Unity ,Cocos 2D", formulario: "La industria de los videojuegos es muy fuerte y crece cada dia , ofreciendo a los desarrolladores una flexibilidad de contenido , ademas de unir equipos enormes de desarrollo, como de diseño , inscribirte como estudiande de diseño de videojuegos es una oportunidad para abrirte al mercado, participar en Game Jams, Empezar tu propio proyecto o aplicar hacia empresas , podras elegir diversos lenguajes de programacion como Java, C++ , C# , o Python para desarrollar juegos uni y multiplataformas" },
        ],

        typesOfCourses: [
            { id: "0", titulo: "Front-end:", contenido: "Prefiero aprender desarrollo front-end", logo: {} },
            { id: "1", titulo: "Back-end:", contenido: "Prefiero aprender desarrollo back-end", logo: {} },
            { id: "2", titulo: "Full-stack:", contenido: "Quiero aprender tanto front-end como back-end", logo: {} },
        ],

        modalTitulo: "",
        modalContenido: "",
        modalFormulario: "",

        instanciaModal: 0,

        sideDrawerStatus: false,
        downloadArrowStatus: false,
        visibilidadModal: false,
        sliderStatus: false,
    }


    abrirSD = () => {

        let sideDrawerStatus = this.state.sideDrawerStatus;

        this.setState({ sideDrawerStatus: !sideDrawerStatus })

    }

    showDownloadComponentHandler = (downloadComponentStatus, downloadArrowStatus) => {

        downloadComponentStatus = this.state.downloadComponentStatus;

        downloadArrowStatus = this.state.downloadArrowStatus;

        this.setState({ downloadComponentStatus: !downloadComponentStatus, downloadArrowStatus: !downloadArrowStatus })

    }

    abrirModalHandler = (modal) => {


        const modalIndex = modal.id

        const singleModal = {
            ...this.state.modals[modalIndex]
        }

        const modals = [...this.state.modals]

        modals[modalIndex] = singleModal

        this.setState({ modalTitulo: modal.titulo })
        this.setState({ modalContenido: modal.contenido })
        this.setState({ modalFormulario: modal.formulario })
        this.setState({ visibilidadModal: true })
        this.setState({ instanciaModal: modalIndex })

        console.log(this.state.instanciaModal)

    }
    cerrarModalHandler = () => {

        this.setState({ visibilidadModal: false })

    }

    cerrarSlider = () => {

        let status = this.state.sliderStatus;

        this.setState({ sliderStatus: !status })
      
    }

    render() {

        let downloadComponentClasses = 'download_component_container'
        let arrowClasses = 'arrow'; 
        let userStatus = localStorage.getItem("status");
        console.log("[ResponsiveNavigationBar.js] localStore ::::::>" , userStatus)


        if (!this.state.sliderStatus) {
            arrowClasses = 'arrow close'
            downloadComponentClasses = 'download_component_container close'
        }

        return (


            <div className="container">
                <div className="navigation_bar">
                    <BrandLogo />
                    <NavigationInput />
                    <div className="nav_bar_tools">
                        {this.state.modals.map((modal, id) => {

                            return (
                                <NavigationTools
                                    key={id}
                                    titulo={modal.boton}
                                    click={() => this.abrirModalHandler(modal)}
                                />
                            );

                        })}
                    </div>
                    <Link to = "/users">Test </Link>
                    <div className="social_media_logos ">
                        <SocialMedia />
                    </div>
                    <div style={{ display: "flex" }}>


                    </div>
                    <Modal
                        click={this.cerrarModalHandler}
                        instancia={this.state.instanciaModal}
                        visibilidad={this.state.visibilidadModal}
                        titulo={this.state.modalTitulo}
                        contenido={this.state.modalContenido}
                        formulario={this.state.modalFormulario}
                        web={this.webHandler}
                        app={this.appHandler}
                        games={this.gamesHandler}
                    />

                </div>
                <div className={downloadComponentClasses}>
                    <div className="download_component">
                        {this.state.typesOfCourses.map(props => {
                            return (

                                <DownloadComponent
                                    key={props.id}
                                    titulo={props.titulo}
                                    contenido={props.contenido}
                                />

                            )
                        })}
                        <div className="download_component_arrow">
                            <p><i className={arrowClasses} onClick={this.cerrarSlider}></i></p>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}


export default NavBar





