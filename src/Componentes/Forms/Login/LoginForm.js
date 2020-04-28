import React, { PureComponent } from 'react';
import './LoginForm.css';
import Form from './Form';
import ToggleButton from './ToggleButton/ToggleButton';
import Axios from './../axios-requests';


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
        validUser: false,
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
        let isValid = false; 

        for (let id in registeredData) {

            let validPassword = false;
            let validUserName = false;

            if (submitedPassword === registeredData[id].contraseña) {

                validPassword = true;

            }

            if (submitedUsername === registeredData[id].userName) {

                validUserName = true;

            }


            console.log(validPassword)
            console.log(validUserName)

            if (validPassword && validUserName) {

              isValid = true; 

            }

        }

        console.log("Backend data", registeredData)
        console.log("Frontend data", submitedUsername)
        console.log("Frontend data", submitedPassword)

        return(isValid)
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

        let ejemplo = this.inputChangeHandler; 
        
        ejemplo()

    }

    render() {
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

        return (
            <div className="login_form_container">
                <form className="login_form" onSubmit={this.submitFormHandler} >
                    <div className="login_form_header">
                        <h1>{title}</h1>
                        <h1>Welcome</h1>
                    </div>
                    <div className="login_form_body">
                        <h1 style={{ fontSize: "25px", margin: "0" }}>Iniciar sesión</h1>
                        {input.map(props => {
                            return (
                                <Form
                                    config={props.config}
                                    key={props.id}
                                    changed={(event) => this.inputChangeHandler(event, props.id)}
                                />
                            )
                        })
                        }
                    </div>
                    <button type="submit">Iniciar sesión</button>
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