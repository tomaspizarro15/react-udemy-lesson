import React from 'react';
import {withRouter} from 'react-router-dom';
import './Input.css';


const Input = (props) => {


    let border; 

   
    if(props.valid === false) {

        border = "2px solid red"

    }else {

        border = "2px solid green"

    }

    let element = null;

    switch (props.elementtype) {
        case ('input'):
            element = <input style = {{border : border}}
                onChange={props.change}
                value={props.value}
                {...props.elementConfig}
            />
            break;
        case ("textarea"):
            element = <textarea
                onChange={props.change}
                {...props.elementConfig}
                value={props.value}
            />
            break;
        case ('select'):
            element =
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
        default: element = null;
    }


    return (
        <div className="form_container">
            <label>
                <p className ="form_p">{props.elementTitle}</p>
                {element}
            </label>
        </div>
    )


}

export default withRouter(Input); 