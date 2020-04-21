import React, { PureComponent } from 'react';
import './LogInComponent.css';
import Input from './Input/Input';
import Introduction from './Introduction/Introduction';
import axios from './axios-requests';
import { Link, Route } from 'react-router-dom';


class LogIn extends PureComponent {

    constructor(props) {
        super(props)
        console.log("[LogInComponent.js]");
    }
    state = {

        introductionData: {
            title: "<RFC>",
            text: "A New platform to learn all about programming",
        },

        registerInput: {
            
            userName : {
                elementTitle: "Nombre de Usuario",
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "username"
                },
                value: ""
            },

            nombre: {
                elementTitle: "Nombres",
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Nombre"
                },
                value: ""
            },

            apellido: {
                elementTitle: "Apellido",
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Apellido"
                },
                value: ""

            },
            correo: {
                elementTitle: "Correo electronico",
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Example123@example.com"
                },
                value: ""
            },
            contraseña: {
                elementTitle: "Contraseña",
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Contraseña"
                },
                value: ""
            },
            pais: {
                elementTitle: "Su pais de nacimiento",
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Pais / Ciudad"
                },
                value: ""

            },
            experiencia: {
                elementType: "select",
                elementTitle: "Experiencia en la programacion",
                elementConfig: {
                    options: [
                        { value: "nuevo", display: "nuevo" },
                        { value: "intermedio", display: "intermedio" },
                        { value: "experto", display: "experto" },
                        { value: "programador profesional", display: "programador profesional" }
                    ]
                },
                value: ""
            }
        },
        loginStatus: "1",
        space: null,
    }


    inputChangeHandler = (event, identifier) => {



        const updatedRegister = { ...this.state.registerInput }
        const updatedRegisterElement = { ...updatedRegister[identifier] }

        updatedRegisterElement.value = event.target.value;

        if (updatedRegister.value !== "") {

            updatedRegister[identifier] = updatedRegisterElement;

        }

        this.setState({ registerInput: updatedRegister })






    }

    registerSubmitHandler = (event) => {

        event.preventDefault(); 
 
        const registerData = {};
        for (let identifier in this.state.registerInput) {

            registerData[identifier] = this.state.registerInput[identifier].value;
            
        }

        axios.post('/users.json', registerData)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    goHomeHandler = () => {

        return(
            <Route path = "/"/>
        )

    }

    render() {
        let form;
        let formElementsArray = [];

        for (let key in this.state.registerInput) {
            formElementsArray.push(
                {
                    id: key,
                    config: this.state.registerInput[key],
                }
            )
        }


        form = (
            <form onSubmit={this.registerSubmitHandler} action ="/home" >
                <Introduction
                    title={this.state.introductionData.title}
                    text={this.state.introductionData.text}
                />
                <div className="form_register">
                    <div className="register_header"> <h1>Register as user</h1></div>
                    <div className="register_body">
                        {formElementsArray.map((formElement, i) => {
                            return (
                                <Input
                                    key={i}
                                    elementTitle={formElement.config.elementTitle}
                                    elementtype={formElement.config.elementType}
                                    elementConfig={formElement.config.elementConfig}
                                    value={formElement.config.value}
                                    change={(event) => this.inputChangeHandler(event, formElement.id)}
                                />
                            )
                        })}
                        <button type ="submit">Create account</button>
                      
                    </div>
                </div>
            </form>
        )
        return (
            [form]
        )
    }
}
export default LogIn
