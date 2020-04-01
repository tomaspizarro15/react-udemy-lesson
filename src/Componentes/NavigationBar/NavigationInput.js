import React from 'react';
import searchLogo from './iconsearch.png'
import './ResponsiveNavigationBar.css'


const NavigationInput = () => {
    
    return (
        <div className="nav_bar_input">
            <img src = {searchLogo} alt = "search_logo" style = {{height : "20px" , width : "20px"}}></img>
            <input placeholder="search...">
            </input></div>
    );

}

export default NavigationInput; 