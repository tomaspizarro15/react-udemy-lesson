import React, { Component } from 'react';
import "./ResponsiveNavigationBar.css"
import "./DownloadComponent/DownloadComponent.css"
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import SideDrawer from '../SideDrawer/SideDrawer';
import DownloadComponent from './DownloadComponent/DownloadComponent';
import NavigationTools from './NavIgationTools';
import Modal from '../Modal/Modal';
import '../Modal/Modal.css'
import './NavigationTools.css'
class NavBar extends Component {

    state = {

        modals: [
            { id: 0, boton: "Web", titulo: "Desarrollo Web", formulario: "Aprender Web developing es uno los objetivos mas buscados en la industria hoy en dia . A continuacion te explicaremos todo sobre el desarrolo , la industria y la flexibilidad de nuestro rubro . Dejanos introducirte a distintas plataformas de Aprendizaje ajustandose a tu comodidad", contenido: "Aprender desarrollo web:contamos con cursos diversos para Front-end : en lenguajes como Javascript,Python , incluyendo todo tipo de frameworks como React, Angular , Vue.js , TypeScript y Back-end : con especializacion en bases de datos tipo :  mySQL y noSQL , hasta inclusive quizas en un futuro puedas desarrollarte en la industria como programador Full-Stack en desarollo web." },
            { id: 1, boton: "Apps", titulo: "Desarrollo de Aplicaciones", contenido: "Aprender App developing es una muy buena eleccion para un programador, cuenta con una gran industria, con excelentes lenguajes y mucha flexibilad para el desarrollo multiplataforma, con lenguajes como Python ,Java, Kotlin, C/C++", formulario: "Si te especializas en el desarrollo de aplicaciones mobiles , tus oportunidades en la industria seran variadas, para todo tipo de aplicaciones , juegos , redes sociales, pequeños SO , aprender a compilar codigo en dispositivos Mobiles, Cross-SO con iOS y Android, validar aplicaciones para plataformas de descarga como la App Store y ¡Apple Store" },
            { id: 2, boton: "Games", titulo: "Desarrollo de Videojuegos", contenido: "Aprender Game-desing es una de las habilidades mas dificiles de un programador, se requieren conocimientos de fisica , de diseño y de programacion orientada a objetos , ademas del manejo apropiado de motores graficos como : Unreal Engine, Godot Engine , Unity ,Cocos 2D", formulario: "La industria de los videojuegos es muy fuerte y crece cada dia , ofreciendo a los desarrolladores una flexibilidad de contenido , ademas de unir equipos enormes de desarrollo, como de diseño , inscribirte como estudiande de diseño de videojuegos es una oportunidad para abrirte al mercado, participar en Game Jams, Empezar tu propio proyecto o aplicar hacia empresas , podras elegir diversos lenguajes de programacion como Java, C++ , C# , o Python para desarrollar juegos uni y multiplataformas" },

        ],
        downloadComponents: [
            { id: 0, title: "Learn FrontEnd Developing", content: "Learn about App/Web/Game - desings", logo: "" },
            { id: 1, title: "Learn BackEnd Developing", content: "Learn about Connections and Databases", logo: "" },
            { id: 2, title: "Learn Full-Stack Developing", content: "I'll do BOTH", logo: "" }
        ],


        sideDrawerComponents: [
            { title: "Account", content1: "Settings", content2: "My Curses", content3: "My Projects", content4: "Log out" },
            { title: "Shop", content1: "Live Lessons", content2: "Curses", content3: "Products/Merch", content4: "Documents & Papers" },
            { title: "Community", content1: "QA Forum", content2: "Community Courses", content3: "Community Documentation", content4: "Community Projects" },
            { title: "About", content1: "About us", content2: "About React", content3: "Git hub", content4: "Social media" },
            { title: "Code Editors", content1: "Visual Studio Code", content2: "Atom", content3: "Sublime Text", content4: "Net beans" },

        ],

        modalTitulo: "",
        modalContenido: "",
        modalFormulario: "",

        instanciaModal: 0,


        downloadComponentStatus: false,
        sideDrawerStatus: false,
        downloadArrowStatus: false,
        visibilidadModal: false,
    }


    showDownloadComponentHandler = (downloadComponentStatus, downloadArrowStatus) => {

        downloadComponentStatus = this.state.downloadComponentStatus;

        downloadArrowStatus = this.state.downloadArrowStatus;

        this.setState({ downloadComponentStatus: !downloadComponentStatus, downloadArrowStatus: !downloadArrowStatus })

    }


    showSideDrawerHandler = () => {

        const sideDrawerStatus = this.state.sideDrawerStatus;


        this.setState({ sideDrawerStatus: !sideDrawerStatus })
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


    render() {

        let downloadComponentClass = 'download_component'
        let arrowComponentClass = 'arrow_download'

        let sideDrawerClasses = 'sidedrawer'

        if (this.state.sideDrawerStatus) {
            sideDrawerClasses = 'sidedrawer open'
        }

        if (this.state.downloadComponentStatus) {
            arrowComponentClass = 'arrow_download open'
            downloadComponentClass = 'download_component open'
        }

        return (
            <div style={{ width: '100%', height: "10%" }}>
                <div style={{ width: "15%" }}></div>
                <div className="nav_tools_container">
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

                <div style={{ width: "25%" }} />

                <div className="navigation_bar">

                    <DrawerToggleButton click={this.showSideDrawerHandler} />
                   
                    <input type="text" placeholder="search..."></input>
                    <div style={{ width: "60%" }}></div>
                    <div style={{ display: "flex" }}>

                        <div className={sideDrawerClasses}>
                            <div className="sidedrawer_button"><button onClick={this.showSideDrawerHandler}>Close</button></div>
                            {this.state.sideDrawerComponents.map((props, i) => {
                                return (
                                    <SideDrawer
                                        key={i}
                                        show={this.state.SideDrawerStatus}
                                        title={props.title}
                                        content1={props.content1}
                                        content2={props.content2}
                                        content3={props.content3}
                                        content4={props.content4}
                                        click={this.showSideDrawerHandler}
                                    >
                                    </SideDrawer>
                                );
                            })}
                        </div>
                    </div>
                    <div className={downloadComponentClass}>
                        <div className="download_content">
                            {this.state.downloadComponents.map((props, id) => {
                                return (
                                    <DownloadComponent
                                        key={id}
                                        title={props.title}
                                        content={props.content}
                                        logo={props.logo}
                                    />
                                );
                            })}
                        </div>
                        <div className="download_arrow">
                            <p><i className={arrowComponentClass} onClick={this.showDownloadComponentHandler}></i></p>
                        </div>

                    </div>
                    <div>
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
                </div>
            </div>
        );
    }
}


export default NavBar





