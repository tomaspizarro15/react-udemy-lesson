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
            <ul className ="side_drawer_ul">


                <div>
                    <li className="side_drawer_close" onClick={props.click}><a>Close</a></li>
                </div>
                <div className="side_drawer_tarjetas">
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
                    <li><a href="$">Products</a></li>
                    <li><a href="$">Products</a></li>
                    <li><a href="$">Products</a></li>
                    <li><a href="$">Products</a></li>
                    <li><a href="$">Products</a></li>
                    <li><a href="$">Products</a></li>
                    <li><a href="$">Products</a></li>
                    <li><a href="$">Products</a></li>
                </div>


            </ul>
        </div>
    )

}


export default SideDrawer;