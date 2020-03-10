import React, { Component } from 'react';
import './SideDrawer.css';
class SideDrawer extends Component {

    state = {
        sideDrawerList: [
            { title: "Store", first_content: "Curses", second_content: "Masterclasses", third_content: "Products", fourth_content: "Documentation" },
            { title: "Settings", first_content: "My account", second_content: "My buys", third_content: "My proyects", fourth_content: "Log in" },
            { title: "Community", first_content: "Forums", second_content: "Community content", third_content: "Community Users", fourth_content: "Stack overflow" },
        ],

        sideDrawerClasses : 'side_drawer_container'

    }
    render(propiedades) {

        let showSideDrawerHandler = () => {



        }

        return (
            <div className={this.state.sideDrawerClasses}>
                <div className="side_drawer">
                    <div className="side_drawer_list">
                        <div className="side_drawer_button_container">
                            <button onClick={showSideDrawerHandler}></button>
                           
                        </div>

                        {this.state.sideDrawer.list.map(list => {
                            return (
                                <div className="side_drawer">
                                    <ul>
                                        <div className="side_drawer_title">
                                            <li className="sd_title"><p>{list.title}</p></li>
                                            <li className="sd_content"><a href="$">{list.first_content}</a></li>
                                            <li className="sd_content"><a href="$">{list.second_content}</a></li>
                                            <li className="sd_content"><a href="$">{list.third_content}</a></li>
                                            <li className="sd_content"><a href="$">{list.fourth_content}</a></li>
                                        </div>
                                        <div className="side_drawer_content"></div>
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div >
        )

    }

}


export default SideDrawer;