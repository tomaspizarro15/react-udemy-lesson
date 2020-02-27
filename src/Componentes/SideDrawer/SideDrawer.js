import React from 'react';
import './SideDrawer.css';
import DrawerToggleButton from './DrawerToggleButton';
const SideDrawer = (props) => {

    let sideDrawerClasses = 'side_drawer';

    if (props.showSideDrawer) {

        sideDrawerClasses = 'side_drawer open';

    }

    return (
        <div className={sideDrawerClasses}>
            <ul>
                <div className="side_drawer_div">

                    <div>
                        <li className="side_drawer_close"><a onClick={props.click}>Close</a></li>
                    </div>
                    <div className ="side_drawer_tarjetas">
                        <li><a href="$">Products</a></li>
                        <li><a href="$">Products</a></li>
                        <li><a href="$">Products</a></li>
                        <li><a href="$">Products</a></li>
                        <li><a href="$">Products</a></li>
                        <li><a href="$">Products</a></li>
                        <li><a href="$">Products</a></li>
                        <li><a href="$">Products</a></li>
                        <li><a href="$">Products</a></li>
                        <li><a href="$">Products</a></li>
                        <li><a href="$">Products</a></li>
                        <li><a href="$">Products</a></li>
                        <li><a href="$">Products</a></li>
                        <li><a href="$">Products</a></li>
                    </div>
                </div>


            </ul>
        </div>
    )

}


export default SideDrawer;