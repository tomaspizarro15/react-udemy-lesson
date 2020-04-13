import React, { PureComponent } from 'react';
import './AccountComponent.css';
import Information from './AccountInformation';


class AccountComponent extends PureComponent {


    state = {

        userData: 
            {id : 0 , userName : "Reyflig" , fullName : "Tomás Pizarro" , level : 13}
        ,

    }
    changeInfoHandler = (event, i) => {

        const newInfo = { ...this.state.userData[i] }

        newInfo.title = "im changed";

        const updatedData = [...this.state.userData]

        updatedData[i] = newInfo

        this.setState({ userData: updatedData })

    }
    render() {
        return (
            <div className="account_container">
                <div className="account">
                    <div className="account_body">
                        <Information 
                            key = {this.state.userData.id}
                            userName ={this.state.userData.userName}
                            fullName = {this.state.userData.fullName}
                            level = {this.state.userData.level}
                        />
                    </div>
                </div>
            </div>
        );


    }


}


export default AccountComponent; 