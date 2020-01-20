import React, { Component } from 'react';
import './EstiloCabecera.css';

class Header extends Component {

    state = {
        content: {}
    }

    render() {
        return (
            <div className = "Position">
                <div className="topnav">
                    <a href="#home">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>
        )
    }
}
export default Header; 