import React from 'react';
import "./MainComponent.css";

const CentralBody = (props) => {

    let mainOneClass = ['main_part_one']

    if(props.showArrow) {
        mainOneClass = ['main_part_one open']
    }

    let mainTwoClass = ['main_part_two']

    if(props.showArrow) {
        mainTwoClass = ['main_part_two open']
    }
    return (

        <div className="main_component">

            <div className= {mainOneClass}>
                <ul>
                    <li>
                       DOWNLOAD FOR REACT:IOS/MAC
                       <button className ="main_part_one_download_button">download v 1:3.8.8</button>
                    </li>
                    <li>
                        DOWNLOAD FOR  REACT:WINDOWS
                        <button className ="main_part_one_download_button">download v 1:2.5.8</button>
                    </li>
                </ul>

                <ul className ="arrow_ul">
                    <i class="arrow down" onClick={props.click}></i>
                </ul>
            </div>
            <div className={mainTwoClass}>
                <li>
                    <h1 className="main_part_two_title">React Components</h1>
                    <button className="main_part_two_button">Download</button>
                </li>
            </div>

            <div className="main_part_three">
                <ul>
                    <li href="/">
                        <h1>About React</h1>
                        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application,
                            and React will efficiently update and render just
                            <p>
                                The right components when your data changes.
                                Declarative views make your code more predictable and easier to debug
                            </p>
                        </p>
                    </li>
                    <li href="/">
                        <h1 className="main_part_three_log_in">Log in</h1>
                        <p>Log in , or create an acount to be available to create websites with react</p>
                        <p> If you dont have an account you can create one just bellow</p>
                        <button className="main_part_three_button" onClick={props.buttonClick}>log in</button>
                    </li>
                    <li href="/">
                        <h1>Hello</h1>
                        <p> Im Tomas pizarro , onTraining Javascript website developer
                            Im from Argentina, Mendoza, the wine capitol ,
                            im 19 , im studing Programming in UTN , and making intensive Udemy React curses
                         </p>
                    </li>
                </ul>
            </div>


        </div>

    );

}

export default CentralBody;





