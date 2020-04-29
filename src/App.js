import React, { Component } from 'react';
////////////////////////////////////////////////////
import Backdrop from './Componentes/Backdrop/Backdrop';
import './App.css';
import MainComponents from './Componentes/MainComponent/MainComponent';
import SideDrawer from './Componentes/SideDrawer/SideDrawer';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './Componentes/NavigationBar/ResponsiveNavigationBar';
import AccountComponent from './RoutingComponents/AccountComponent/AccountComponent';
import LogIn from './Componentes/Forms/RegisterComponent';
import UserList from './RoutingComponents/ListaDeUsuarios/Users';
import autentification from './GlobalVariables/Autentificacion';
import LoginForm from './Componentes/Forms/Login/LoginForm';

let auth; 

class Componente1 extends Component {


  constructor(props) {
    super(props);
    console.log('[App.js] constructor')

  }

  state = {
    bienvenido: [{ name: "Timothy" }],
    persons: [
      { id: '15703728', name: "Tomás", age: 19, edad: 2000 },
      { id: '72727272', name: "Maximilian", age: 27, edad: 1989 },
      { id: '12391237', name: "Pablo", age: 26, edad: 1993 }
    ],
    showArrow: false,
    showSideDrawer: false,
    showPersons: true,
    showInfo: false,
    showDatosDelUsuario: true,
    authen: true,
    testString: "Haello woarld"

  }

  componentDidMount() {

    this.setState({ authen: auth })

  }

  mostrarObjetoHandler = () => {

    const newShowObjeto = true;

    this.setState({ showObjeto: !newShowObjeto })
  }
  mostrarSideDrawerHandler = () => {
    const newSideDrawer = this.state.sideDrawer;

    this.setState({ sideDrawer: !newSideDrawer })
  }

  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.persons];      // Esto es necesario para poder manipular a persons dentro de cada metodo
    newPersons.splice(personIndex, 1)
    this.setState({ persons: newPersons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {

      if (person.id === id) {
        return person.id;
      }
      else {
        return null;
      }

    })
    const person = {
      ...this.state.persons[personIndex]
    }

    person.edad = event.target.value;

    const newPersonsArray = [...this.state.persons]

    newPersonsArray[personIndex] = person;

    this.setState(
      { persons: newPersonsArray }
    )
  }

  edadChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.edad = event.target.value;

    const newPersonsArray = [...this.state.persons] //DOING A BACKUP ARRAY

    newPersonsArray[personIndex] = person;

    this.setState(
      { persons: newPersonsArray }
    )
  }

  ocultarSideDrawerHandler = () => {

    const newShowSideDrawer = this.state.showSideDrawer;

    this.setState({ showSideDrawer: !newShowSideDrawer })
  }

  render() {
     auth = autentification();
    console.log("APP.JS GLOBAL VAR", console.log(auth))

    return (
      <BrowserRouter>
        <NavBar />
        <Backdrop />
        <SideDrawer />
        <Route path="/" exact render={() => <LogIn />} />
        <Route path ="/login" exact component = {LoginForm}/>
        {auth  ?
          <Switch>
            <Route path="/home" exact component={MainComponents} />
            <Route path="/account" exact component={AccountComponent} />
            <Route path="/users/" component={UserList}/>
            </Switch> : <Redirect to="/" />
        }


      </BrowserRouter>

    )
  }
}

export default Componente1;





