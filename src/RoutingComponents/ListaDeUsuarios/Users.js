import React, { PureComponent } from 'react'
import './Users.css'; 
import Lists from './Lists';
import axios from './../../Componentes/Forms/axios-requests';



class UserList extends PureComponent {


    state = {

        registeredUsers : {}

    }

    response = axios.get("/users.json")
        .then( r => r.data)
        .then( u => {

            this.setState({ registeredUsers : u})
            console.log("[Users.js]",this.state.registeredUsers)
        })

    render() {

       console.log(this.state.registeredUsers)
       let user = {}

       for( let id in this.state.registeredUsers) {

            user = this.state.registeredUsers[id]
            console.log(user)

       }

        return (
            <div className ="users_list_container">
                <div className ="users_list_header">
                
                </div>       
            </div>
        ); 
    }


}


export default UserList; 