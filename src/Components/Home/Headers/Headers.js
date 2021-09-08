import React from 'react';
import './Headers.css'
import Navbar from '../../SharedComponents/NavBar/Navbar';
import ToBanner from '../TopBanner/ToBanner';

const Headers = () => {
    return (
        <div className="background-color" >
            <Navbar></Navbar>
            <ToBanner></ToBanner>
        </div>
    );
};

export default Headers;