import React from 'react';
import bannerImg from '../../../Image_Icon/Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
import { Link } from 'react-router-dom';
const ToBanner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center ">
                    <div className="banner-content">
                        <h2 className="fw-bold lh-base" >BEAUTY SELON <br /> FOR EVERY WOMEN</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam quaerat inventore rem! Vel rerum, eius eaque excepturi nobis fuga.</p>
                        <Link to='/user-dashboard'>
                        <button className="login-button" >Get an Appointments </button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="banner-image p-4">
                        <img className="img-fluid" src={bannerImg} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToBanner;