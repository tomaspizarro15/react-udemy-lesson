import React, { PureComponent } from 'react'
import './Users.css';
import Lists from './Lists';
import axios from './../../Componentes/Forms/axios-requests';
import { NavLink } from 'react-router-dom';
import { Route  } from 'react-router-dom';
import UserProfile from './UserProfile/UserProfile';

class UserList extends PureComponent {

    constructor() {
        super()
        console.log("ROUTING PROPS",this.props)

    }


    state = {

        registeredUsers: {},
        user: {},
    }


    response = axios.get("/users.json")
        .then(r => r.data)
        .then(u => {

            this.setState({ registeredUsers: u })
        
        })

    render() {
        
        let users = []
        let list = {};
        let index = 0;
        let stars = Math.random(10) * 10;
        Math.random(stars)

        for (let id in this.state.registeredUsers) {

            users.push(
                {
                    number: index,
                    id: id,
                    props: this.state.registeredUsers[id],
                    stars: stars,
                }
            )
            index = index + 1;

        }

        list = (
            <div className="users_list_body">
                {users.map(user => {
            
                    return (
                        <NavLink to = { this.props.match.url  +"/" + user.id}  key={user.id}>
                            <Lists
                                number={user.number}
                                nombre={user.props.nombre}
                                username={user.props.userName}
                            />
                        </NavLink>
                    )
                })}
            </div>
        )

        return (
            <div className="users_list_container">
                <div className="users_list_header">

                </div>
                {list}
                <Route path={ this.props.match.url + "/:id"} component={UserProfile} />
            </div>  
        );
    }


}


export default UserList; 