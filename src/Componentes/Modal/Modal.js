import React from 'react';
import logoReact from './logoreact.png'
import logoJs from './logojs.png'
import logoCss from './logocss.png'
import logoHtml from './logohtml.png'
import logoAngular from './logoangular.png'
import logoVue from './logovue.png'
import logoTs from './logots.png'
import logoPy from './logopython.png'
import logoKot from './logokotlin.png'
import logoJava from './logojava.png'
import logoUnreal from './logounreal.png';
import logoUnity from './logounity.png';
import logoGodot from './logogodot.png';
import './Modal.css';


const Modal = (props) => {


    let modalClassesContainer = 'modal_container';
    let modalClasses = 'modal'


    let logos;

    if (props.instancia === 0) {

        logos = (
            <div className="modal_logos">
                <img src={logoAngular} alt="logo_angular" className="logo_angular"></img>
                <img src={logoCss} alt="logo_css" className="logo"></img>
                <img src={logoReact} alt="logo_react" className="logo"></img>
                <img src={logoJs} alt="logo_js" className="logo"></img>
                <img src={logoTs} alt="logo_ts" className="logo_angular"></img>
                <img src={logoHtml} alt="logo_html" className="logo"></img>
                <img src={logoVue} alt="logo_vue" className="logo_angular"></img>
            </div>
        )
    }    else if (props.instancia === 1) {

        logos = (
            <div className="modal_logos">

                <img src={logoPy} alt="logo_python" className="logo"></img>
                <img src={logoJava} alt="logo_java" className="logo"></img>
                <img src={logoKot} alt="logo_kotlin" className="logo"></img>

            </div>
        )
    }  else if (props.instancia === 2) {

        logos = (
            <div className="modal_logos">

                <img src={logoUnreal} alt="logo_unreal" className="logo"></img>
                <img src={logoUnity} alt="logo_unity" className="logo"></img>
                <img src={logoGodot} alt="logo_godot" className="logo"></img>

            </div>
        )
    }

    if (!props.visibilidad) {
        modalClassesContainer = 'modal_container close'
        modalClasses = 'modal close'
    }

    return (

        <div className={modalClassesContainer} onClick = {props.click}>

            <div className={modalClasses}>
                <div className="modal_title">
                    <div className ="modal_head">
                        <h1>{props.titulo}</h1>
                    </div>
                    <div className = "modal_close">
                        <button onClick={props.click}><p>X</p></button>
                    </div>
                </div>
                <div className="modal_content">
                    <ul>
                        <li>
                            <p>{props.contenido}</p>
                            <p>{props.formulario}</p>
                            <button>Comenzar</button>
                            {logos}

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );



}

export default Modal;