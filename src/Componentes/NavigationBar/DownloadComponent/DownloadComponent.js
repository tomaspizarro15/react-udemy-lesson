import React from 'react';
import './DownloadComponent.css';


const DownloadComponent = (props) => {
    return (
        <li>
            <div style = {{margin: "2vw 0 0 0"}}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <button onClick={null}>Apply</button>
            </div>
        </li>
    );
}
export default DownloadComponent; 