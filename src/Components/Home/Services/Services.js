import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
const Services = () => {
const [serviceData,setServiceData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data =>{
            
            setServiceData(data)
        })
        .catch(error =>{
            console.log(error);
        })
    },[])
    console.log(serviceData);
    return (
        <div id="services" className="container p-4 mt-4 mb-4 " >
            <div className=" text-center">
                <h2>Our Awesome <span className="text-color-purple"> Services</span> </h2>
            </div>
            <div className="row mt-4 pt-4">
                {
                    serviceData.map((data)=><Service data={data} ></Service> )
                }
            </div>
            <div className=" d-flex justify-content-center p-4">
            <button className="login-button" >Explore More</button>
            </div>
        </div>
    );
};

export default Services;