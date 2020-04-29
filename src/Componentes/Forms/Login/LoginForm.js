import React, { PureComponent } from 'react';
import './LoginForm.css';
import Form from './Form';
import ToggleButton from './ToggleButton/ToggleButton';
import Axios from './../axios-requests';
import auth from './../../../GlobalVariables/Autentificacion';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class LoginForm extends PureComponent {

    state = {
        inputs: {
            username: {
                value: "",
                config: {
                    type: "text",
                    placeholder: "username",
                    title: "Your Username",
                }
            },
            password: {
                value: "",
                config: {
                    type: "password",
                    placeholder: "password",
                    title: "Your password",
                }
            }
        },
        userData: {},
        validUser: 0,
        toggleButton: false,
        regPassword: "",
        regUsername: "",
    }

    componentDidMount() {
        let data = {}
        Axios.get('/users.json', data)
            .then(response => response.data)
            .then(data => data)
            .then(prData => {
                this.setState({ userData: prData })
            })
            .catch(error => console.log(error))
    }

    rememberButtonHandler = () => {

        let toggle = !this.state.toggleButton

        this.setState({ toggleButton: toggle })

    }


    validateLoginValues = () => {

        const registeredData = { ...this.state.userData };
        const submitedPassword = this.state.inputs.password.value;
        const submitedUsername = this.state.inputs.username.value;
        let isValid = this.state.validUser; 
        let keepSearching = true; 

        console.log("Data recieved", registeredData);

       

            for (let id in registeredData) {

                let validPassword = false;
                let validUserName = false;
            
                
                console.log("Contraseña", registeredData[id].contraseña)
                console.log("Contraseña ingresada", submitedPassword)
                console.log("Usuario", registeredData[id].userName)
                console.log("Usuario ingresado", submitedUsername)

                if (submitedPassword === registeredData[id].contraseña) {

                    validPassword = true;
                }
                if (submitedUsername === registeredData[id].userName) {

                    validUserName = true;

                }

                if (validPassword && validUserName) {

                    isValid = 2;
                    this.setState({ validUser: isValid })
                    break; 


                } else {

                    isValid = 1;
                    this.setState({ validUser: isValid })

                }
            }

        console.log("submited data", submitedPassword, submitedUsername)



        return (isValid)
    }


    inputChangeHandler = (event, id) => {
        const registerUsers = { ...this.state.userData }
        const inputValues = { ...this.state.inputs }
        const inputValue = { ...inputValues }

        inputValue.value = event.target.value;
        inputValues[id].value = inputValue.value;

        this.setState({ input: inputValues })

    }

    submitFormHandler = (event) => {

        event.preventDefault();

        this.validateLoginValues();

        console.log(auth())

    }

    render() {
        let alert = null;
        let register = null;
        let title = "<RFC/>"
        let input = [];

        for (let key in this.state.inputs) {

            input.push(
                {
                    id: key,
                    config: this.state.inputs[key]

                }
            )

        }
        if (this.state.validUser === 2) {

            register = (<Redirect to="/home" />)

        }

        return (

            <div className="login_form_container">
                {register}
                <form className="login_form" onSubmit={this.submitFormHandler} >
                    <div className="login_form_header">
                        <h1>{title}</h1>
                        <h1>Bienvenido</h1>
                    </div>
                    <div className="login_form_body">
                        <h1 style={{ fontSize: "25px", margin: "0" }}>Iniciar sesión</h1>
                        {input.map(props => {
                            return (
                                <Form
                                    config={props.config}
                                    key={props.id}
                                    changed={(event) => this.inputChangeHandler(event, props.id)}
                                    status={this.state.validUser}
                                />
                            )
                        })
                        }
                    </div>
                    <button type="submit">Iniciar sesión</button>
                    <Link to="/">No tengo una cuenta</Link>
                    <ToggleButton
                        active={this.state.toggleButton}
                        toggle={this.rememberButtonHandler}
                    />
                </form>
            </div>
        );
    }
}

export default LoginForm; 