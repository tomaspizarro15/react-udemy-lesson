import React from 'react';
import './AccountComponent.css';



const Information = (props) => {


    return (

        <div className="account_body_information">
            <div className="information_black">
                <div className="user_photo"></div>
                <h1>{props.userName}</h1>
                <h1>{props.fullName}</h1>
                <h1>Level {props.level}</h1>
            </div>
            <div className="information_orange">
                <div className="user_socials">
                    <p>Your level</p>
                </div>
                <div className="user_socials">
                    <p>Your Rate</p>
                </div>
            </div>
            <div className="information_white">
                <div className="user_info">
                    <p>Example info</p>
                </div>
                <div className="user_info">
                    <p>Example info</p>
                </div>
            </div>
        </div>

    );


}

export default Information; 