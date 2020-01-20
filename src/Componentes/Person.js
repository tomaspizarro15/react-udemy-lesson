import React from 'react';


const Person = (props) => {
    return (
        <div className="Person">
            <p>Inser your data </p>
            <input type="text" onChange={props.changed} value = {props.name}>{}</input>
            <input type = "text" onChange = {props.changedBirthDate}></input>
            <input type="number" onChange = {props.changedAge} value = {props.age}></input>
        <p onClick={props.click}> im {props.name} and im {props.age} years old  and my birthday is {props.birthDate}</p>
        </div>
    )
}
export default Person; 