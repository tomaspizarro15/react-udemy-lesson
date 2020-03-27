import React from 'react';
import './SideDrawer.css';
const sideDrawer = (props) => {

    return (


        <ul className="sidedrawer_list">

            <div className="sidedrawer_title">
                <li ><h1>{props.title}</h1></li>
            </div>
            <div className="sidedrawer_content">
                <li><a href="/">{props.content1}</a></li>
                <li><a href="/">{props.content2}</a></li>
                <li><a href="/">{props.content3}</a></li>
                <li><a href="/">{props.content4}</a></li>
                
            </div>
        </ul >
    );


}

export default sideDrawer; 