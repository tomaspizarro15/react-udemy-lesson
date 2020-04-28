import React, { PureComponent } from 'react';
import './LogInComponent.css';
import Input from './Input/Input';
import Introduction from './Introduction/Introduction';
import axios from './axios-requests';
import { Route, Redirect, Link ,Switch } from 'react-router-dom';
import MainComponents from '../MainComponent/MainComponent';
import AccountComponent from '../../RoutingComponents/AccountComponent/AccountComponent';
import UserList from '../../RoutingComponents/ListaDeUsuarios/Users';
import auth from '../../GlobalVariables/Autentificacion';
import autentification from '../../GlobalVariables/Autentificacion';


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

            userName: {
                elementTitle: "Nombre de Usuario",
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "username",
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 18,
                    specialChar: true,
                },
                valid: false,
                unique: true,
                touched: false,
                alert: "username invalido,(8-16 caracteres) sin teclas especiales"


            },

            nombre: {
                elementTitle: "Nombres",
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Nombre",
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 2,
                    maxLength: 32,
                    specialChar: false,
                },
                valid: false,
                touched: false,
                alert: "nombre invalido , debe tener entre 2 y 32 caracteres"

            },

            apellido: {
                elementTitle: "Apellido",
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Apellido",
                },
                value: "",
                validation: {
                    minLength: 2,
                    maxLength: 32,
                    required: true,
                    specialChar: false,
                },
                valid: false,
                alert: "apellido invalido ,debe tener entre 2 y 32 caracteres"

            },
            correo: {
                elementTitle: "Correo electronico",
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Example123@example.com",
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 42,
                    emailValidation: true,

                },
                valid: false,
                touched: false,
                alert: "correo electronico invalido"
            },
            contraseña: {
                elementTitle: "Contraseña",
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Contraseña",
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 32,
                    specialChar: true,
                    validateValue: false,
                },
                valid: false,
                touched: false,
                alert: "contraseña invalida debe tener entre 8 y 32 caracteres"
            },
            validarContraseña:
            {
                elementTitle: "Repetir contraseña",
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Contraseña",
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 8,
                    maxLength: 32,
                    specialChar: true,
                    validateValue: true,
                },
                valid: false,
                touched: false,
                alert: "las contraseñas deben ser iguales"
            },

            pais: {
                elementTitle: "Nacionalidad",
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Pais / Ciudad",

                },
                value: "",
                validation: {
                    required: true,
                    specialChar: false,
                    minLength: 4,
                    maxLength: 42,
                },
                valid: false,
                touched: false,
                alert: "pais invalido debe tener minimo 4 caracteres"

            },
        },
        loginStatus: "1",
        validInput: false,
        submited: false,


    }


    checkValidationHandler = (value, rules, unique) => {

        let valid = true;
        const regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g;

        if (rules.required) {

            valid = value.trim() !== '' && valid;

        }

        if (rules.minLength) {

            valid = value.length >= rules.minLength && valid;

        }

        if (rules.maxLength) {


            valid = value.length <= rules.maxLength && valid;
        }


        if (rules.emailValidation) {

            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            valid = re.test(value)

        }

        if (rules.specialChar) {

            valid = regex.test(value) && valid;

        }

        let password = this.state.registerInput.contraseña.value;
        let repeatedPass = this.state.registerInput.validarContraseña.value;

        if (rules.validateValue) {

            valid = value === password && valid || value === repeatedPass && valid;

        }

        this.setState({ hasError: valid })
        return (valid)

    }

    inputChangeHandler = (event, identifier) => {

        const updatedRegister = { ...this.state.registerInput }
        const updatedRegisterElement = { ...updatedRegister[identifier] }


        updatedRegisterElement.value = event.target.value;
        updatedRegisterElement.valid = this.checkValidationHandler(updatedRegisterElement.value, updatedRegisterElement.validation, updatedRegisterElement.unique)
        updatedRegisterElement.touched = true;

        updatedRegister[identifier] = updatedRegisterElement;

        let validInput = true;

        for (let inputID in updatedRegister) {

            validInput = updatedRegister[inputID].valid && validInput;

        }

        this.setState({ registerInput: updatedRegister, validInput: validInput })
    }

    registerSubmitHandler = (event) => {


        event.preventDefault();

        const registerData = {};
        for (let identifier in this.state.registerInput) {

            registerData[identifier] = this.state.registerInput[identifier].value;
        }

        if (this.state.hasError) {

            axios.post('/users.json', registerData)
                .then(response => console.log(response))
                .catch(error => console.log(error))
            this.setState({ submited: true })

        }

    }

    render() {

        
        let form;
        let formElementsArray = [];
        let redirect = null;
        let submitButton = null;

        if (this.state.submited === true) {
            redirect = <Redirect to="/home" />
        }
        if (this.state.validInput) {

            submitButton = "button_submit"

        } else { submitButton = "button_submit invalid" }

        for (let key in this.state.registerInput) {
            formElementsArray.push(
                {
                    id: key,
                    config: this.state.registerInput[key],
                }
            )
        }
        form = (
            <form onSubmit={this.registerSubmitHandler}>
                <Introduction
                    title={this.state.introductionData.title}
                    text={this.state.introductionData.text}
                />
                <div className="form_register">
                    {redirect}
                    <div className="register_header"> <h1>Register as user</h1></div>
                    <div className="register_body">
                        {formElementsArray.map((formElement, i) => {
                            return (
                                <Input
                                    key={i}
                                    elementTitle={formElement.config.elementTitle}
                                    elementtype={formElement.config.elementType}
                                    elementConfig={formElement.config.elementConfig}
                                    placeholder={formElement.config.elementConfig.placeholder}
                                    valid={formElement.config.valid}
                                    value={formElement.config.value}
                                    change={(event) => this.inputChangeHandler(event, formElement.id)}
                                    touched={formElement.config.touched}
                                    alert={formElement.config.alert}
                                />
                            )
                        })}
                        <button type="submit" disabled={!this.state.validInput} className={submitButton} onClick = {autentification}>Register</button>
                        <div>
                            <Link to="/login">i have an account</Link>
                        </div>
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
