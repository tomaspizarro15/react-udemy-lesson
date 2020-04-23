import React, { Component } from 'react';
import axios from './../../../Componentes/Forms/axios-requests'
import './UserProfile.css';

class UserProfile extends Component {


    state = {

        users: {},
        currentID: "",


    }

    componentDidMount() {
        let userData = {}
        axios.get('/users.json', userData)
            .then(r => r.data)
            .then(user => {

                this.setState({ users: user })

            })

    }




    render() {

        let user = {}


        for (let key in this.state.users) {

            if (key === this.props.match.params.id) {


                user = this.state.users[key]
                console.log(user)


            }

        }

        return (
            <div className="user_profile_container">
                <div className="user_profile">
                    <p> {user.apellido}</p>
                    <p>{user.nombre}</p>
                    <p>{user.userName}</p>
                    <p>{user.correo}</p>
                </div>
            </div>
        );

    }

}

export default UserProfile;





