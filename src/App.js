import React, { Component } from 'react';
////////////////////////////////////////////////////
import Backdrop from './Componentes/Backdrop/Backdrop';
import './App.css';
import MainComponents from './Componentes/MainComponent/MainComponent';
import SideDrawer from './Componentes/SideDrawer/SideDrawer';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Componentes/NavigationBar/ResponsiveNavigationBar';
import AccountComponent from './RoutingComponents/AccountComponent/AccountComponent';
import LogIn from './Componentes/Forms/LogInComponent';
import UserList from './RoutingComponents/ListaDeUsuarios/Users';


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
      else{
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

    return (
      <BrowserRouter>
        <NavBar />
        <Backdrop />
        <Route path="/home" exact render={() => <MainComponents />} />
        <Route path="/account" exact render={() => <AccountComponent />} />
        <SideDrawer />
        <Route  path="/"  exact render={() => <LogIn/>} />
        <Route path = "/users"  render = {() => <UserList/>}/>
      </BrowserRouter>
    )
  }
}

export default Componente1;





