import React, { Component } from 'react';
import "./ResponsiveNavigationBar.css"
import "./SideDrawer/SideDrawer.css"
import DrawerToggleButton from './SideDrawer/DrawerToggleButton';
import SideDrawer from './SideDrawer/SideDrawer';
class NavBar extends Component {


    state = {

        sideDrawerComponents: [
            { title: "Account", content1: "Settings", content2: "My Curses", content3: "My Projects", content4: "Log out" },
            { title: "Shop", content1: "Live Lessons", content2: "Curses", content3: "Products/Merch", content4: "Documents & Papers" },
            { title: "Community", content1: "QA Forum", content2: "Community Courses", content3: "Community Documentation", content4: "Community Projects" },
            { title: "About", content1: "About us", content2: "About React", content3: "Git hub", content4: "Social media" },
            { title: "Code Editors", content1: "Visual Studio Code", content2: "Atom", content3: "Sublime Text", content4: "Net beans" },
            
        ],

        sideDrawerStatus: false,
    }
    showSideDrawerHandler = () => {

        let newSideDrawerStatus = this.state.sideDrawerStatus;

        this.setState({ sideDrawerStatus: !newSideDrawerStatus })

    }

    render() {

        let sideDrawerClasses = 'sidedrawer'

        if (this.state.sideDrawerStatus) {  
            sideDrawerClasses = 'sidedrawer open'
        }


        return (
            <div className="nav_bar">
                <div className="nav_bar_button">
                    <DrawerToggleButton
                        click={this.showSideDrawerHandler}
                    />
                    <div className={sideDrawerClasses}>
                        <div className="sidedrawer_button"><button onClick={this.showSideDrawerHandler}>Close</button></div>
                        {this.state.sideDrawerComponents.map((props, i) => {
                            return (
                                <SideDrawer
                                    key = {i}
                                    show={this.state.SideDrawerStatus}
                                    title={props.title}
                                    content1={props.content1}
                                    content2={props.content2}
                                    content3={props.content3}
                                    content4={props.content4}>
                                </SideDrawer>
                            );
                        })}
                    </div>

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





