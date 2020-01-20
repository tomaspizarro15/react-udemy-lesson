import React, { Component, useState } from 'react';
////////////////////////////////////////////////////
import DatosDelUsuario from './Componentes/DatosDelUsuario';
import Person from "./Componentes/Person";
import InfoCuerpo from './Componentes/Informacion';
import './Componentes/EstiloCuerpo.css';
import './Componentes/Titulo.css';
import './App.css'
class Componente1 extends Component {

  state = {

    bienvenido: [{ name: "Timothy" }],

    persons: [
      { id : '15703728' , name: "Tomás", age: 19 ,  birthDate : 2000 },
      { id : '72727272' , name: "Maximilian", age: 27 },
      { id : '12391237' , name : "Pablo" , age : 26 } 
    ],
    showPersons: true,
    showInfo: false,
    showDatosDelUsuario: true,
  }
  mostrarComponentesHandler = () => {                   // Este metodo sirve para que se muestren condicionalmente los distintos componentes renderizados por react 
      const showPersons = this.state.showPersons;  
      const showInfo = this.state.showInfo  ;           // ESTUDIAR ESTO 
      const showDatosDelUsuario = this.state.showDatosDelUsuario ;


      this.setState({ showPersons: !showPersons})
      this.setState({ showInfo: !showInfo })
      this.setState({showDatosDelUsuario : !showDatosDelUsuario})
    }
  deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];      // Esto es necesario para poder manipular a persons dentro de cada metodo
        persons.splice(personIndex , 1)
        this.setState({persons : persons})
  }

  nameChangedHandler = (event , id) => {

    const personIndex = this.state.persons.findIndex(person => {

      return person.id === id; 

      

    });

    const person = { ...this.state.persons[personIndex]};  //Crea copia del Objeto y lo asigna a const person y a la posicion de personIndex que encontro el Index o ID de la persona 

    person.name = event.target.value;

    const persons = [...this.state.persons] // Crea copia del Array 
    persons[personIndex] = person;  

    this.setState ({

      persons: persons
    
    }) ;
  
  }

  alertaMayra = () => {
    
    return( 
      alert()
    )

  }


  ageChangedHandler = (event , id) => {

    const personIndex = this.state.persons.findIndex(person => {    // personIndex no es nada mas que un numero 

      return person.id === id; 
      

    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.age = event.target.value; 

    const persons = [...this.state.persons]

    persons[personIndex] = person; 
    
    this.setState(
      {
        persons: persons
      }
    ) 
  }

  birthDateChangedHandler = (event , id) => {

    const personIndex = this.state.persons.findIndex( person => {


      return person.id === id; 
      
    }) 

    const person = {
     ...this.state.persons[personIndex]
    }
    person.birthDate = event.target.value; 

    const persons = [...this.state.persons]

    persons[personIndex] = person; 

    this.setState({
      persons: persons
    });

  } 

  render() {
    let persons;
    let showRegister;
    let showInfor;
    let showDatosDelUsuario;
  

    if (!this.state.showDatosDelUsuario) {
      showRegister = (
        <div>
          {this.state.bienvenido.map(person => {
            return ( 
                <DatosDelUsuario
                  name={person.name}
                ></DatosDelUsuario>
              

            )
          })}
        </div>

      );
    }
    if (!this.state.showInfo) {
      showInfor = (
       <InfoCuerpo></InfoCuerpo>
      );
    }

    if (!this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person , index)=> {
            return (
              <Person
                key = {person.id}
                name={person.name}
                age={person.age}
                click = { () => this.deletePersonHandler()}
                changed= { (event) => this.nameChangedHandler(event , person.id) }
                changedAge = {(event) => this.ageChangedHandler(event, person.id)}
                changedBirthDate = {(event) => this.birthDateChangedHandler(event ,person.id)}
              />
            )
          })}
        </div>
      )

    }

    return (
      <div className="App" >
        <title>Aplicacion React</title>
        <div className="DivisionTitulo">
          <button className="BotonIngresar" onClick={this.mostrarComponentesHandler}>Log in</button>
        </div>
        {showInfor}
        <div>
          {showRegister}
          {persons}
        </div>
      </div>
    )
  }
}

export default Componente1;





