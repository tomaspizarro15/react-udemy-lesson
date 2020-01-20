import React from 'react' ; 




const componenteIniciarSesion = (props) => {



    return(
        <div className = "RegistroSesion">
            <div>
                <input placeholder = "Correo Electronico" type = "Text"></input>
            </div>
            <div>
                <input placeholder = "Nombre" type = "Text"></input>
            </div>
            <div>
                <input placeholder = "Apellido" type = "Text"></input>
            </div>
            <div>
                <input placeholder = "Contraseña" type = "Password"></input>
            </div>
            <div>
                <input placeholder = "Repetir Contraseña" type = "Password"></input>
            </div>
        </div>
    );

}


export default componenteIniciarSesion;