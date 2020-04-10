import React from 'react';


const lists = (props) => {
    return (

        <li>
            <a href={props.href} onClick={props.click}>{props.text}</a>
        </li>

    );
}
export default lists; 