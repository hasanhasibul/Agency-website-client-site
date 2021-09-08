import React from 'react';
import './LeftBar.css'
import { Link } from 'react-router-dom';
import logo from '../../../Image_Icon/Group 33092.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket,faPlus,faUsers,faCog } from '@fortawesome/free-solid-svg-icons'
import Service from './../../Home/Services/Service/Service';
import LogOut from '../../UserDashboard/UserLeftbar/LogOut';
const LeftBar = () => {
    
    return (
        <div className="" >
            <div className="logodiv p-4 ">
                <img width="150px" src={logo} alt="" />
            </div>
            <div>
                <ul className="link-list p-4">
                    <li><Link to="/order-list" >
                         <FontAwesomeIcon color="#f63e7b" icon={faShoppingBasket} />
                          <span className="p-2">Order List</span> 
                         </Link></li>
                    <li><Link to="/add-service"> 
                    <FontAwesomeIcon color="#f63e7b" icon={faPlus} /> Add Service
                     </Link></li>
                    <li><Link to="/make-admin" >
                    <FontAwesomeIcon color="#f63e7b" icon={faUsers} /> Make Admin
                          </Link></li>
                    <li><Link to="/manage-services" > 
                    <FontAwesomeIcon color="#f63e7b" icon={faCog} /> Manage Services </Link></li>
                </ul>
            </div>

          <LogOut></LogOut>
        </div>
    );
};

export default LeftBar;