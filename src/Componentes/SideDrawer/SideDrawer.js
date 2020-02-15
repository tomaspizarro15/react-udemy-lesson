import React from 'react';
import DrawerToggleButton from './DrawerToggleButton';
import './SideDrawer.css';

const SideDrawer = (props) => {

        let drawerClasses = 'side_drawer'

        if(props.show) {

            drawerClasses = ['side_drawer open']

        }

    return (
        <nav className = {drawerClasses}>
            <ul>          
                <div className = "side_drawer_head">
                    <ul>
                        <li onClick = {props.click}><b href = "/">close</b></li>
                    </ul>
                </div>
                <div className = "side_drawer_list_items">
                <li><a href="/">Products</a></li>
                </div>
                <li><a href="/">Users</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
            </ul>
        </nav>
    )

}


export default SideDrawer;