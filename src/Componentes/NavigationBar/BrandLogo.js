import React from 'react';
import './ResponsiveNavigationBar.css'
import  logoBrand from './iconbrand.png'


const BrandLogo = () => {

    let logo = '<Tp/>'

    return (
        <div className="nav_bar_logo">
            <img src = {logoBrand} alt = "brand_logo" className ="brand_logo"></img>
        </div>
    );
}

export default BrandLogo; 