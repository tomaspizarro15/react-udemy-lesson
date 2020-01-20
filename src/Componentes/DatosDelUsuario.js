import React from 'react'
import "./EstiloCuerpo.css"
const DatosDelUsuario = (props) => {

    return (
        <div className="Person">
            <div className="TituloRegistro">
    <p> welcome {props.name} </p>

                <div className="Input">
                    <div>
                        <label>Nombre de usuario : </label>
                        <input placeholder="Nombre de Usuario" className="Pass" type="Text" ></input>
                    </div>
                    <div>
                        <label>Contraseña: </label>
                        <input placeholder="Contraseña" className="Pass" type="password" ></input>
                    </div>
                </div>
                <div className="Registrar">
                    <button className="BotonIngresar2">INGRESAR</button>
                    <h1 className="Pregister">¿No tienes una cuenta , registrate?</h1>
                    <div>
                        <button className="BotonIngresar2">REGISTRARSE</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DatosDelUsuario;