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
                <div className="nav_bar_button">
                    <DrawerToggleButton
                        click={this.showSideDrawerHandler}
                    />
                </div>
                <div className="nav_bar_title">
                    <li>React</li>
                </div>
                <div className="spacer_1"></div>
                <div className="nav_bar_input">
                    <input type="text" placeholder ="Search..."></input>
                </div>
                <div className="spacer_2"></div>
                <div className="nav_bar_list">
                    <ul>
                        <li><a href ="$">Products</a></li>
                        <li><a href ="$">Products</a></li>
                        <li><a href ="$">Products</a></li>               
                    </ul>

                </div>
                <SideDrawer
                    click={this.showSideDrawerHandler}
                    showSideDrawer={this.state.showSideDrawer}
                />
            </div>
        );
    }

}


export default NavBar





