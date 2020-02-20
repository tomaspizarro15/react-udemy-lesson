import React, { Component, useState } from 'react';
////////////////////////////////////////////////////
import NavBar from './Componentes/ResponsiveNavigationBar';
import Backdrop from './Componentes/Backdrop/Backdrop';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import MainComponents from './Componentes/MainComponent/MainComponent';
import LowComponent from './Componentes/LowComponent/LowComponent';


class Componente1 extends Component {

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

  findIndexPersonHandler = (event, id) => {

    const EncontrandoElID = this.state.persons.findIndex(person => {

      return person.id === id;
    }
    )

    const IDPersona = { 
      ...this.state.persons[EncontrandoElID]
    }

  }

  ocultarSideDrawerHandler = () => {

    const newShowSideDrawer = this.state.showSideDrawer;

    this.setState({ showSideDrawer: !newShowSideDrawer })
  }
  render() {

    const rnd = Math.random();

    if (rnd < 0.0001) {

    }

    return (
      <StyleRoot>
        <div className="App" style={{ height: '100%' }} >
          <Backdrop/>
          <NavBar />  
          <main style={{ marginTop: '0%' }}>
          </main> 
          <MainComponents/>
          <LowComponent/>
        </div>
        
      </StyleRoot>
    )
  }
}

export default Radium(Componente1);





