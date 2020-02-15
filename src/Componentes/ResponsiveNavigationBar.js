import React, { Component } from 'react';
import "./NavBar.css"
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';




class NavBar extends Component {

    state = {

        showSideDrawer: false,

    }


    showSideDrawerHandler = () => {

        const newShowSideDrawer = this.state.showSideDrawer;


        this.setState({ showSideDrawer: !newShowSideDrawer })


    }

    render() {


        return (
            <div>
                <Backdrop
                    click={this.hideSideDrawerHandler}
                />
                <header className="navbar">
                    <nav className="navigation_bar">
                        <div>
                            <DrawerToggleButton
                                click={this.showSideDrawerHandler}
                            />
                        </div>

                        <SideDrawer
                            click = {this.showSideDrawerHandler}
                            show =  {this.state.showSideDrawer}
                        />

                        <div className="navbar_logo"><a href="/">React</a></div>
                        <div className="spacer" />
                        <div className="navigationbar_items">
                            <ul>
                                <li onClick={this.showContentHandler}><a href="/">Store</a></li>
                                <li onClick={this.showContentHandler}><a href="/">Products</a></li>
                                <li onClick={this.showContentHandler}><a href="/">Log in </a></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div>
                </div>
            </div>
        )
    }

}


export default NavBar





