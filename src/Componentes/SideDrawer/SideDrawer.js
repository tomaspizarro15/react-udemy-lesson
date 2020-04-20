import React, { PureComponent } from 'react';
import './SideDrawer.css';
import Lists from './SDLists/Lists';

class SideDrawer extends PureComponent {


    state = {

        acc: [

            { id: 0, text: "Account Settings", href: "/account" },
            { id: 1, text: "My Curses", href: "/My-Courses" },
            { id: 2, text: "Favorites", href: "/My-Favourites" },
        ],
        store: [

            { id: 0, text: "Curses", href: "/Curses" },
            { id: 1, text: "Documentation", href: "/Documentation" },
            { id: 2, text: "MasterClasses", href: "/Master-Classes" },
        ],
        comm: [

            { id: 0, text: "Forum", href: "/Forums" },
            { id: 1, text: "Projects", href: "/Projects" },
            { id: 2, text: "Tutorials", href: "/Tutorials" },
            { id: 3, text: "About us", href: "/Information" },


        ],
                                                                                
        status: false,
    }

     asd = this.abrirSD


    closeHandler = () => {
        let status = this.state.status
        this.setState({ status: !status })

    }


    render() {
        let containerClass = "sidedrawer_container"
        let backdropClass = "sidedrawer_backdrop"
        let bodyClasses = "sidedrawer_body inactive"

        if (!this.state.status) {
            backdropClass = "sidedrawer_backdrop close"
            containerClass = "sidedrawer_container close"
            bodyClasses = "sidedrawer_body"
        }
        return (
            <div className={containerClass}>
                <div className= {bodyClasses} onClick = {this.abrirHandler}>
                    <h1>Account</h1>
                    {this.state.acc.map((props, i) => {
                        return (
                            <Lists
                                key={i}
                                text={props.text}
                                href={props.href}
                            />
                        )
                    })}
                    <h1>Store</h1>
                    {this.state.store.map((props, i) => {
                        return (
                            <Lists
                                key={i}
                                text={props.text}
                                href={props.href}
                            />

                        )
                    })
                    }
                    <h1>Community</h1>
                    {this.state.comm.map((props, i) => {
                        return (
                            <Lists
                                key={i}
                                text={props.text}
                                href={props.href}


                            />
                        )
                    })}



                </div>

                <div className={backdropClass} onClick={this.closeHandler}>

                </div>
            </div>

        );

    }

}



export default SideDrawer; 