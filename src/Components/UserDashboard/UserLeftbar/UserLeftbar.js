import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faClipboardList, faComments } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom';
import logo from '../../../Image_Icon/Group 33092.png'
import LogOut from './LogOut';
const UserLeftbar = () => {
    return (
        <div className="" >
            <div className="logodiv p-4 ">
                <img width="150px" src={logo} alt="" />
            </div>
            <div>
                <ul className="link-list p-4">
                    <li><Link to="/book" >
                        <FontAwesomeIcon color="#f63e7b" icon={faShoppingCart} />
                        <span className="p-2">Book</span>
                    </Link></li>
                    <li><Link to="/booking-list">
                        <FontAwesomeIcon color="#f63e7b" icon={faClipboardList} /> Booking List
                    </Link></li>
                    <li><Link to="/review" >
                        <FontAwesomeIcon color="#f63e7b" icon={faComments} /> Review
                    </Link></li>
                </ul>
            </div>
           <LogOut></LogOut>
        </div>
    );
};

export default UserLeftbar;