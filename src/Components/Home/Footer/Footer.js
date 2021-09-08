import React from 'react';
import locationIcon from '../../../Image_Icon/Icon/map-pin-2-fill.png';
import icon from '../../../Image_Icon/Icon/Vector.png';
import icon1 from '../../../Image_Icon/Icon/Vector-1.png';
import icon2 from '../../../Image_Icon/Icon/Vector-2.png';
import icon3 from '../../../Image_Icon/Icon/Vector-3.png';
import './Footer.css'
const Footer = () => {
    return (
        <div className="p-4" style={{backgroundColor:'#F63E7B'}} >
            <div className="container pt-4 pb-4 ">
                <div className="row pb-4 mt-4">
                    <div className="col-md-3 p-4 ">
                        <div className="row " >
                            <div className="col-md-2">
                                <img className="img-fluid" src={locationIcon} alt="" />
                            </div>
                            <div className="col-md-10 text-white">
                                <p>Mirpur-1,Dhaka Bangladesh</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ex veritatis dolor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                                <h2 className="h4 p-4 text-white">Company</h2>
                                <ul className='linkUl' >
                                    <li>About</li>
                                    <li>Project</li>
                                    <li>Our Team</li>
                                    <li>Terms and Condition</li>
                                    <li>Submit Listing</li>
                                </ul>
                    </div>
                    <div className="col-md-3">
                    <h2 className="h4 p-4 text-white">Quick Links</h2>
                                <ul className='linkUl' >
                                    <li>Quick Links</li>
                                    <li>Our Blogs</li>
                                    <li>Contact Us</li>
                                </ul>
                    </div>
                    <div className="col-md-3 pt-4">
                       <h2 className="h4 text-white">About Us</h2>
                        <p className="text-white" >Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolorum officiis deserunt rerum consequatur?</p>
                        <div>
                            <img className="p-2" width="45px"  src={icon} alt="" />
                            <img  className="p-2" width="45px" src={icon1} alt="" />
                            <img className="p-2" width="45px" src={icon2} alt="" />
                            <img className="p-2" width="45px" src={icon3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;