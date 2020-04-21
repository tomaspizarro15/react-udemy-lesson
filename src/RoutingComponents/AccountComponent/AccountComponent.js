import React, { PureComponent } from 'react';
import axios from './../../Componentes/Forms/axios-requests';
import './AccountComponent.css';
import Information from './AccountInformation';


class AccountComponent extends PureComponent {

    state = {
        userData: [{ userName: "Reyflig", fullName: "Tomás Pizarro", level: 13 }],
        response: {}
    }
    userData = axios.get("/users.json")
        .then(r => r.data)
        .then(u => {
            this.setState({ response: u })
            let updatedResponse = {};
            for (let id in this.state.response) {
                updatedResponse = this.state.response[id]
                console.log(updatedResponse)
            }
        })

    render() {

        return (
            <div className="account_container">
                <div className="account">
                    <div className="account_body">
                        {this.state.userData.map((data, i) => {
                            return (
                                <Information
                                    key={i}
                                    userName={data.userName}
                                    fullName={data.fullName}
                                    level={data.level}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }


}


export default AccountComponent; 