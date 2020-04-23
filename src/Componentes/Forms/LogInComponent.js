import React, { PureComponent } from 'react';
import './LogInComponent.css';
import Input from './Input/Input';
import Introduction from './Introduction/Introduction';
import axios from './axios-requests';
import { Route, Redirect } from 'react-router-dom';


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
                validation : {
                    required :true, 
                    minLength : 6 , 
                    maxLength : 18 ,
                },
                valid : false,
                unique : true,

                
            },

            nombre: {
                elementTitle: "Nombres",
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Nombre",
                },
                value: "",
                validation : {
                    required :true, 
                    minLength : 2,
                    maxLength : 32, 
                },
                valid : false,
                
            },

            apellido: {
                elementTitle: "Apellido",
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Apellido",
                },
                value: "",
                validation : {
                    minLength : 2,
                    maxLength : 32, 
                    required :true, 
                },
                valid : false,

            },
            correo: {
                elementTitle: "Correo electronico",
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Example123@example.com",
                },
                value: "",
                validation : {
                    required :true, 
                },
                valid : false,
            },
            contraseña: {
                elementTitle: "Contraseña",
                elementType: "input",
                elementConfig: {
                    type: "password",
                    placeholder: "Contraseña",
                },
                value: "",
                validation : {
                    required :true, 
                    minLength : 8, 
                    maxLength : 32, 
                },
                valid : false,
            },
            pais: {
                elementTitle: "Su pais de nacimiento",
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Pais / Ciudad",

                },
                value: "",
                validation : {
                    required :true, 
                },
                valid : false,

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
                valid : true,
                value: "",
                validation : {
                    
                    required : true,

                }
            }
        },
        loginStatus: "1",
        space: null,
        hasError: true,
        submited: false,


    }

    checkValidationHandler = (value , rules , unique) => {

        let valid = true;
         
        if(rules.required) {
            
            valid = value.trim() !== '' && valid;

        }

        if(rules.minLength) {

            valid = value.length >= rules.minLength && valid;

        }

        if(rules.maxLength) {

            valid = value.length <= rules.maxLength && valid;

        }
    
        console.log("min" , rules.minLength)
        console.log("max" , rules.maxLength)
        


        return(valid)
        
    }

    inputChangeHandler = (event, identifier) => {

        const updatedRegister = { ...this.state.registerInput }
        const updatedRegisterElement = { ...updatedRegister[identifier] }

        if (updatedRegisterElement.value.length <= 10) {


            this.setState({ hasError: true })


        } else {
            this.setState({ hasError: false })
        }

        updatedRegisterElement.value = event.target.value;
        updatedRegisterElement.valid = this.checkValidationHandler(updatedRegisterElement.value , updatedRegisterElement.validation , updatedRegisterElement.unique )
        updatedRegister[identifier] = updatedRegisterElement;

        this.setState({ registerInput: updatedRegister })

        console.log("(inputChangeHandler) VALOR ::::>", updatedRegisterElement.valid)

    }

    registerSubmitHandler = (event) => {

        event.preventDefault(); 

        const registerData = {};
        for (let identifier in this.state.registerInput) {

            registerData[identifier] = this.state.registerInput[identifier].value;
        }
        console.log("[LogInComponent.js ::::>]", registerData)

        axios.post('/users.json', registerData)
            .then(response => console.log(response))
            .catch(error => console.log(error))
            this.setState({submited : true})
    }

   

    goHomeHandler = () => {

        return (
            <Route path="/" />
        )

    }

    render() {

        let form;
        let formElementsArray = [];
        let redirect = null; 

        if(this.state.submited === true) {

            redirect = <Redirect to = "/home"/>

        }

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
                                    valid = {formElement.config.valid}
                                    value={formElement.config.value}
                                    change={(event) => this.inputChangeHandler(event, formElement.id)}
                                />
                            )
                        })}
                        <button type="submit">Register</button>
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
