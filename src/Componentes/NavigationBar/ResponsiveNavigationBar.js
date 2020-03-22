import React, { Component } from 'react';
import "./ResponsiveNavigationBar.css"
import "./DownloadComponent/DownloadComponent.css"
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import SideDrawer from '../SideDrawer/SideDrawer';
import DownloadComponent from './DownloadComponent/DownloadComponent';
import NavigationTools from './NavIgationTools';

class NavBar extends Component {

    state = {

        navigationSelectors: [
            { title: "Web-desing", option: "HTML", option1: "CSS", option2: "JAVASCRIPT", option3: "FRAMEWORKS" },
            { title: "Game-desing", option: "ENGINES", option1: "LANGUAGES", option2: "PROJECT-DESING", option3: "VISUAL-DESING" },
            { title: "App-desing", option: "KOTLIN", option1: "JAVA", option2: "REACT NATIVE", option3: "PYTHON" },

        ],
        downloadComponents: [
            { title: "Learn FrontEnd Developing", content: "Learn about App/Web/Game - desings", logo: "" },
            { title: "Learn BackEnd Developing", content: "Learn about Connections and Databases", logo: "" },
            { title: "Learn Full-Stack Developing", content: "I'll do BOTH", logo: "" }
        ],

        sideDrawerComponents: [
            { title: "Account", content1: "Settings", content2: "My Curses", content3: "My Projects", content4: "Log out" },
            { title: "Shop", content1: "Live Lessons", content2: "Curses", content3: "Products/Merch", content4: "Documents & Papers" },
            { title: "Community", content1: "QA Forum", content2: "Community Courses", content3: "Community Documentation", content4: "Community Projects" },
            { title: "About", content1: "About us", content2: "About React", content3: "Git hub", content4: "Social media" },
            { title: "Code Editors", content1: "Visual Studio Code", content2: "Atom", content3: "Sublime Text", content4: "Net beans" },

        ],
        downloadComponentStatus: false,
        sideDrawerStatus: false,
        downloadArrowStatus: false,
    }
    showSideDrawerHandler = (sideDrawerStatus) => {

        sideDrawerStatus = this.state.sideDrawerStatus;

        this.setState({ sideDrawerStatus: !sideDrawerStatus })


    }

    showDownloadComponentHandler = (downloadComponentStatus, downloadArrowStatus) => {

        downloadComponentStatus = this.state.downloadComponentStatus;

        downloadArrowStatus = this.state.downloadArrowStatus;

        this.setState({ downloadComponentStatus: !downloadComponentStatus, downloadArrowStatus: !downloadArrowStatus })


    }

    render() {

        let downloadComponentClass = 'download_component'
        let arrowComponentClass = 'arrow_download'

        let sideDrawerClasses = 'sidedrawer'

        if (this.state.sideDrawerStatus) {
            sideDrawerClasses = 'sidedrawer open'
        }

        if (this.state.downloadComponentStatus) {
            arrowComponentClass = 'arrow_download open'
            downloadComponentClass = 'download_component open'

        }

        return (
            <div>

                <div className="navigation_bar">

                    <DrawerToggleButton click={this.showSideDrawerHandler} />
                    <div style={{ width: "15%" }}></div>
                    <input type="text" placeholder="search..."></input>
                    <div style = {{width : "25%"}}></div>
                    <div style = {{display : "flex"}}>
                        {this.state.navigationSelectors.map((props, i) => {
                            return (
                                <NavigationTools
                                    key={i}
                                    title={props.title}
                                    option={props.option}
                                    option1={props.option1}
                                    option2={props.option2}
                                    option3={props.option3}
                                />
                            )

                        })}
                    </div>
                    <div className={sideDrawerClasses}>
                        <div className="sidedrawer_button"><button onClick={this.showSideDrawerHandler}>Close</button></div>
                        {this.state.sideDrawerComponents.map((props, i) => {
                            return (
                                <SideDrawer
                                    key={i}
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
                <div className={downloadComponentClass}>
                    <div className="download_content">
                        {this.state.downloadComponents.map((props, i) => {
                            return (
                                <DownloadComponent
                                    title={props.title}
                                    content={props.content}
                                    logo={props.logo}
                                />
                            );
                        })}
                    </div>
                    <div className="download_arrow">
                        <p><i className={arrowComponentClass} onClick={this.showDownloadComponentHandler}></i></p>
                    </div>

                </div>

            </div>
        );
    }
}


export default NavBar





