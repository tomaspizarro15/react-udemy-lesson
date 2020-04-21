import React from 'react';
import {withRouter} from 'react-router-dom';
import './Input.css';


const Input = (props) => {

    let inputElement = null;
    console.log(props)

    switch (props.elementtype) {
        case ('input'):
            inputElement = <input
                onChange={props.change}
                value={props.value}
                {...props.elementConfig}
            />
            break;
        case ("textarea"):
            inputElement = <textarea
                onChange={props.change}
                {...props.elementConfig}
                value={props.value}
            />
            break;
        case ('select'):
            inputElement =
                <select value={props.value}
                    onChange={props.change}>
                    {props.elementConfig.options.map((option, i) => {
                        return (
                            <option
                                key={i}
                                value={option.value}
                            >
                                {option.display}
                            </option>
                        )
                    })}

                </select>
            break;
        default: inputElement = null;
    }


    return (
        <div className="form_container">
            <label>
                <p className ="form_p">{props.elementTitle}</p>
                {inputElement}
            </label>
        </div>
    )


}

export default withRouter(Input); 