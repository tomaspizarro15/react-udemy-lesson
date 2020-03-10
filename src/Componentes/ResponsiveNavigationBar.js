import React, { Component } from 'react';
import "./ResponsiveNavigationBar.css"
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';





class NavBar extends Component {

    state = {
        showSideDrawer: false,
        showArrow: false,
        sdContent: [
          
            {  id : "01" ,nombre: "Store", cUno: "Documentation", cDos: "Curses", cTres: "Live Lessons", cCuatro: "Products" },
            {  id : "02" ,nombre: "Settings", cUno: "My Account", cDos: "My Curses", cTres: "My Stats", cCuatro: "Log out" },
            {  id : "03" ,nombre: "Settings", cUno: "My Account", cDos: "My Curses", cTres: "My Stats", cCuatro: "Log out" },
        ]

    }

    showSideDrawerHandler = () => {

        const newShowSideDrawer = this.state.showSideDrawer;

        this.setState({ showSideDrawer: !newShowSideDrawer })
    }

    render() {


        return (
            <div className="nav_bar">
                <div className="nav_bar_button">
                    <DrawerToggleButton/>
                    <SideDrawer/>
                </div>
                <div className="nav_bar_title">
                    <li><h1>ProgramMe</h1></li>
                </div>
                <div className="spacer_1"></div>
                <div className="nav_bar_input">
                    <input type="text" placeholder="Search..."></input>
                </div>
                <div className="spacer_2"></div>
                <div className="nav_bar_list">
                    <ul>
                        <li><a href="$">About us</a></li>
                        <li><a href="$">Front-end curses</a></li>
                        <li><a href="$">Back-end curses</a></li>
                    </ul>

                </div>
                <div>
                </div>
            </div>
        );
    }

}


export default NavBar





