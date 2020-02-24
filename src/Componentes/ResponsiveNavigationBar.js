import React, { Component } from 'react';
import "./ResponsiveNavigationBar.css"
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';




class NavBar extends Component {

    state = {

        showSideDrawer: false,
        showArrow: false,
    }

    showSideDrawerHandler = () => {

        const newShowSideDrawer = this.state.showSideDrawer;

        this.setState({ showSideDrawer: !newShowSideDrawer })
    }

    render() {


        return (
            <div className="nav_bar">
                <div className="nav_bar_button"><DrawerToggleButton /></div>
                <div className="nav_bar_title">
                    <li>React</li>
                </div>
                <div className="spacer"></div>
                <div className="nav_bar_input">
                    <input type="text"></input>
                </div>

                <div className="nav_bar_li">

                    <ul>
                        <li href="#">Products</li>
                        <li href="#">Settings</li>
                        <li href="#">Community</li>
                    </ul>

                </div>
            </div>
        );
    }

}


export default NavBar





