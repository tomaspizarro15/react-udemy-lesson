import React , {Component} from 'react';
import './Titulo.css';


class Titulo extends Component {

    render () {
            return (
            <div className="DivisionTitulo">

                <div className = "H1">
                    <h1 className = "H1">Bienvenido al sitio , por favor registrarse como usuario</h1>
                </div>
                <div className = "H1">
                <button className = "BotonIngresar" onclick>INGRESAR</button>
                </div>
            </div>
            
        )
    }
}

export default Titulo;