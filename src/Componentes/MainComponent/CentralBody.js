import React from 'react';
import "./MainComponent.css";

const CentralBody = (props) => {




    let mainUnoClasses = 'main_uno'


    if (props.showDescarga === true) {
        mainUnoClasses = 'main_uno close'
    }

    return (

        <div className="main_component">

            <div>

            </div>
            <div className="main_central">
                <h1>Let's Begin the teaching</h1>

                <div className="main_central_button">
                    <button>Start now</button>
                </div>

            </div> 
            <div className="main_dos">
                <div className="main_dos_container">
                    <ul>
                        <li>
                            <h1>About React</h1>                          
                            <p>
                                React makes it painless to create interact
                                ve UIs. Design simple views for each state in your application,
                                and React will efficiently update and render just the right components when your data changes.
                                Declarative views make your
                            code more predictable and easier to debug.</p>
                            <button className="button_more" onClick={props.redirectReact}>React site</button>
                        </li>
                        <li>
                            <h1>About me</h1>
                            <p>Hi, I'm Tomás Pizarro , a 19 years old
                            Javascript Developer  an Programming studant in National Technological
                            University of Mendoza , Argentina,
                            I use React Library in my WebPages , I work in Visual Studio Code
                            Please , visit my Git Hub profile
                        </p>
                            <button className="button_more" onClick={props.redirectGH}>Git Hub Profile</button>
                        </li>
                        <li>
                            <h1>About Mendoza</h1>
                            <p>t is located at a strategic geopolitical point within the
                            Central Bioceanic Corridor. Steady growth during recent years and the diversification of
                            productive activities has made Mendoza one of the most developed provinces in the country of Argentina
                              </p>
                            <button className="button_more" onClick={props.redirectMendoza}>Mendoza site</button>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    );
}
export default CentralBody;