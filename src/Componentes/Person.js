import React, { Component } from 'react';


const Person = (props) => {


    
    return (

        <div>
            <div className = 'Person'>
                <p>
                    PERSON COMPONENTS
                </p>
            </div>
            <div className="Person">
                <h1 className='Parrafo' onClick={props.click} onChange={props.changed}>
                    Im {props.name} and  I am {props.age} years old
            </h1>
                <p>
                    Click my Name to eliminate me
            </p>
            </div>
        </div>
    )

}

export default Person; 