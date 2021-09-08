import React from 'react';
import './SignleService.css'
const SingleService = ({ service }) => {
    return (
        <div className="col-md-6 ">
            <div style={{ backgroundColor: 'white', borderRadius: "10px" }} className="service-div p-4 m-1 ">
                <div className="row">
                    <div className="col-md-8">
                        <img width="50px" src={`data:image/png;base64,${service.img}`} alt="" />
                    </div>
                    <div className="col-md-4">
                        <button className="btn pending"> {service.status} </button>
                    </div>
                </div>
                <div className="pt-4" >
                    <h2 className="h5"> {service.title} </h2>
                    <p className="text-secondary"> {service.des} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleService;