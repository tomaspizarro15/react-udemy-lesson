import React, { PureComponent } from 'react';
import './AccountComponent.css';
import Information from './AccountInformation';


class AccountComponent extends PureComponent {

    state = {

        userData: [{ userName: "Reyflig", fullName: "Tomás Pizarro", level: 13 }]
    }

    render() {
        return (
            <div className="account_container">
                <div className="account">
                    <div className="account_body">
                        {this.state.userData.map((data ,i) => {
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