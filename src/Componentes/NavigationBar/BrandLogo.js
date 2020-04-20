import React from 'react';
import {Link} from 'react-router-dom';
import './ResponsiveNavigationBar.css'
import  logoBrand from './iconbrand.png'


const BrandLogo = (props) => {

    return (
       <Link to = "/home">
            <div className="nav_bar_logo" onClick = {props.click}>
            <img src = {logoBrand} alt = "brand_logo" className ="brand_logo"></img>
        </div>
       </Link >
    );
}

export default BrandLogo; 