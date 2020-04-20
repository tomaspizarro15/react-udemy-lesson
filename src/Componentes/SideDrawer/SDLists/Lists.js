import React from 'react';
import {Link} from 'react-router-dom';

const lists = (props) => {
    return (

        <li>
            <Link to={props.href} onClick={props.click}>{props.text}</Link>
        </li>

    );
}
export default lists; 