import React from 'react';
import './ResponsiveNavigationBar.css'
import  logoBrand from './iconbrand.png'


const BrandLogo = (props) => {

    return (
       <a href ="/">
            <div className="nav_bar_logo" onClick = {props.click}>
            <img src = {logoBrand} alt = "brand_logo" className ="brand_logo"></img>
        </div>
       </a>
    );
}

export default BrandLogo; 