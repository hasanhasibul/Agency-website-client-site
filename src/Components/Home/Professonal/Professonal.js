import React from 'react';
import image from '../../../Image_Icon/Image//engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'
const Professonal = () => {
    return (
        <div className="background-color p-4 m-4 ">
            <div className="container p-4 ">
            <div className="row ">
                <div className="col-md-6">
                    <div className="p-4">
                        <img className="img-fluid" src={image} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="p-4">
                        <h2 className="h2 lh-base ">Let Us Handle Your <br />  Screen <span className="text-color-purple"> Professionally </span> </h2>
                        <p className=" pt-4 lead fs-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro tempore odit consectetur praesentium laborum illo deserunt enim sed incidunt esse!</p>
                    </div>
                    <div className="row p-4">
                        <div className="col-md-6">
                            <div className="pl-2">
                            <h2 className="h2 text-color-purple">
                                500+
                            </h2>
                            <h6 className="h6">
                                Happy Clients
                            </h6>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pl-2">
                                <h2 className="h2 text-color-purple">
                                   16+
                                </h2>
                                <h6 className="h6">
                                    Total Services
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Professonal;