import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Image_Icon/Group 33092.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <div style={{width:'150px'}} >
                    <a class="navbar-brand" href="/">
                        <img className="img-fluid" src={logo} alt="" srcset="" />
                    </a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav float-md-right menuItems ">
                            <li class="nav-item">
                            <Link to="/" class="nav-link">Home</Link>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#services">Our Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Our Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Contact Us</a>
                            </li>
                            <li class="nav-item">
                            <Link to="/dashboard" class="nav-link">Admin</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/user-dashboard" class="nav-link">My Booking</Link>
                            </li>
                            <li class="nav-item">
                               <Link to="/login" > 
                               <button  className="login-button" >Login</button>
                               </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;